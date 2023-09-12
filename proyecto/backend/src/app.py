from flask import Flask
from flask_pymongo import PyMongo
from .config import configure_app
from .routes import register_routes

app = Flask(__name__)
configure_app(app)  # Configuraciones generales y de BD

register_routes(app)  # Registro de las rutas

if __name__ == "__main__":
    app.run(debug=True)
