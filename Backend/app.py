from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from models.property import PropertySchema

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://mugiwara:LXkVWmf5p2K1FaUD@mugiwara.eaxwa3x.mongodb.net/mugiwara"
mongo = PyMongo(app)

property_schema = PropertySchema()

@app.route('/add_property', methods=['POST'])
def add_property_endpoint():
    data = request.json

    # Validar datos contra el esquema
    errors = property_schema.validate(data)
    if errors:
        return jsonify({"error": errors}), 400

    # Insertar el documento en la colección 'properties'
    result = mongo.db.properties.insert_one(data)

    # Responder con un mensaje y el ID del documento insertado
    return jsonify({"message": f"Propiedad añadida con ID: {result.inserted_id}"}), 201

if __name__ == '__main__':
    app.run(debug=True)
