from flask import Flask, Blueprint, jsonify, request, Response
from flask_pymongo import PyMongo
from models.property import PropertySchema
from models.user import UserSchema
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv
from flask_cors import CORS
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

# WEBSITE
app = Flask(__name__)
CORS(app)

# Connect to the database
app.config["MONGO_URI"] = os.getenv("MONGO_URI")  # dotenv
mongo = PyMongo(app)

# ************* DB MODELS ***************

property_schema = PropertySchema()
user_schema = UserSchema()

# ************* Singleton ****************

auth =  Blueprint('auth', __name__)

# ***************** Routes ********************

# -------- App ------------

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

# -------- Auth ------------

@auth.route('/signUp', methods=['POST'])
def sign_up():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    
    if name and email and password:
        hashpass = generate_password_hash(password)
        user_collection = mongo.db.user  # Get the user collection
        user_collection.insert_one(
            {
                'name': name,
                'email': email,
                'password': hashpass
            }
        )
        user = {
            'name': name,
            'email': email,
            'password': hashpass
        }
        response = jsonify({
            'status': 'Success',
            'data': {
                'user': user,
            }
        })
        response.status_code = 200
        return response
    else:
        return jsonify({'message': 'Incomplete data'}), 400


@auth.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']

    # Consult the database for the user
    user_collection = mongo.db.user
    user = user_collection.find_one({"email": email})

    # If the password is incorrect, return an error message
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid email or password'}), 401

    # If the credentials are correct, return a new JWT token
    user_data = {
        "name": user["name"],
        "email": user["email"]
    }
    return jsonify(user_data)


# ------------ Error Handlers -----------

@app.errorhandler(404)
def not_found(error=None):
    response = jsonify({
        'message': 'Resource Not Found' + request.url,
        'status': 404
        })
    response.status_code = 404
    return response

# ----------- Rutas Modelos ---------------

@app.route('/add_property', methods=['POST'])
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

@app.route('/add_user', methods=['POST'])
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


# Inicialize the routes
app.register_blueprint(auth, url_prefix='/auth')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

