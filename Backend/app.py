from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from models.property import PropertySchema
from models.user import UserSchema
import os
from dotenv import load_dotenv

# Carga las variables de entorno desde el archivo .env
load_dotenv()

app = Flask(__name__)
app.config["MONGO_URI"] = os.getenv("MONGO_URI")  # dotenv
mongo = PyMongo(app)

property_schema = PropertySchema()
user_schema = UserSchema()

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

if __name__ == '__main__':
    app.run(debug=True)
