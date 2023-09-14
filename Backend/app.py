from flask import Flask, Blueprint, jsonify, request, Response
from flask_pymongo import PyMongo
from models.property import PropertySchema
from models.user import UserSchema
from werkzeug.security import generate_password_hash, check_password_hash
from bson import json_util
from dotenv import load_dotenv
import os
import joblib
import pandas as pd


def preprocess_input(input_data, training_columns):
    # Convertir los datos a un DataFrame
    df = pd.DataFrame([input_data])

    # One-hot encoding
    df_encoded = pd.get_dummies(df)

    # Asegurarse de que el DataFrame tenga las mismas columnas que los datos de entrenamiento
    for col in training_columns:
        if col not in df_encoded.columns:
            df_encoded[col] = 0  # Añadir columnas faltantes y llenarlas con 0
    df_encoded = df_encoded[
        training_columns
    ]  # Reordenar las columnas y eliminar columnas adicionales

    return df_encoded


# Cargar el modelo xgb_model entrenado
xgb_model = joblib.load("xgb_model.pkl")

# Load the environment variables from the .env file
load_dotenv()

# SERVIDOR WEB
app = Flask(__name__)

# Conectar a la base de datos
app.config["MONGO_URI"] = os.getenv("MONGO_URI")  # dotenv
mongo = PyMongo(app)

# ************* Modelos BD ***************

property_schema = PropertySchema()
user_schema = UserSchema()

# ************* Singleton ****************

auth = Blueprint("auth", __name__)
seller = Blueprint("seller", __name__)
customer = Blueprint("customer", __name__)
sales = Blueprint("sales", __name__)
house = Blueprint("property", __name__)

# ***************** Rutas ********************

# ------------ App ----------------


@app.route("/home", methods=["GET"])
def home():
    return "hola"


@app.route("/onSale")
def onSale():
    return "onSale"


@app.route("/myHome")
def myHome():
    return "myHome"


@app.route("/homeValue")
def homeValue():
    return "homeValue"


# -------- Auth ------------


@auth.route("/signUp", methods=["POST"])
def sign_up():
    name = request.json["name"]
    lastname = request.json["lastname"]
    email = request.json["email"]
    password = request.json["password"]
    phone = request.json["phone"]
    user_type = request.json["user_type"]

    if name and lastname and email and password:
        hashpass = generate_password_hash(password)
        user_collection = mongo.db.user  # Get the user collection
        user_collection.insert_one(
            {
                "name": name,
                "lastname": lastname,
                "email": email,
                "password": hashpass,
                "phone": phone,
                "user_type": user_type,
            }
        )
        response = {
            "name": name,
            "lastname": lastname,
            "email": email,
            "password": hashpass,
            "phone": phone,
            "user_type": user_type,
        }
        return jsonify(response)
    else:
        return jsonify({"message": "Incomplete data"})


@auth.route("/login", methods=["GET"])
def login():
    user_collection = mongo.db.user
    user = user_collection.find()
    response = json_util.dumps(user)
    return Response(response, mimetype="application/json")


# ------- Seller ---------


@seller.route("/<id>", methods=["GET"])
def oneSeller():
    user_collection = mongo.db.user
    user = user_collection.find()
    response = json_util.dumps(user)
    return Response(response, mimetype="application/json")


# ------- Consumer --------


@customer.route("/<id>", methods=["GET"])
def oneConsumer():
    return


# ------- Sales ----------


@sales.route("/<id>")
def oneSale():
    return


# ---------- House ---------


@house.route("/<id>", methods=["GET"])
def one_property():
    return


# ------------ Error Handlers -----------


@app.errorhandler(404)
def not_found(error=None):
    response = jsonify({"message": "Resource Not Found" + request.url, "status": 404})
    response.status_code = 404
    return response


# ----------- Rutas Modelos ---------------


@app.route("/add_property", methods=["POST"])
def add_property_endpoint():
    data = request.json

    # Validate the data against the property schema
    errors = property_schema.validate(data)
    if errors:
        return jsonify({"error": errors}), 400

    # Insert the property document into the 'properties' collection
    result = mongo.db.properties.insert_one(data)

    # Answer with a message and the ID of the inserted property
    return jsonify({"message": f"Property added with: {result.inserted_id}"}), 201


@app.route("/add_user", methods=["POST"])
def add_user_endpoint():
    data = request.json

    # Validate the data against the user schema
    errors = user_schema.validate(data)
    if errors:
        return jsonify({"error": errors}), 400

    # Insert the user document into the 'user' collection
    result = mongo.db.user.insert_one(data)

    # Answer with a message and the ID of the inserted user
    return jsonify({"message": f"User added successfully: {result.inserted_id}"}), 201


@app.route("/predict_price", methods=["POST"])
def predict_price():
    # Obtener los datos del formulario
    data = request.json

    # Preprocesar los datos
    training_columns = (
        xgb_model.get_booster().feature_names
    )  # obtener las columnas del modelo entrenado
    processed_data = preprocess_input(data, training_columns)

    # Hacer la predicción
    prediction = xgb_model.predict(processed_data)

    # Convertir la predicción a un tipo nativo de Python
    estimated_price = float(prediction[0])

    # Devolver la predicción como respuesta
    return jsonify({"estimated_price": estimated_price})


# Inicializar las rutas
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(seller, url_prefix="/seller")
app.register_blueprint(customer, url_prefix="/customer")
app.register_blueprint(sales, url_prefix="/sales")
app.register_blueprint(house, url_prefix="/property")


if __name__ == "__main__":
    app.run(debug=True)
