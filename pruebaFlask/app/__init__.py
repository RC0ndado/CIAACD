from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import config

app = Flask(__name__)
app.config.from_object(config)
db = SQLAlchemy(app)

from app.routes.main_routes import main  # Importa desde main_routes
app.register_blueprint(main)

# Más configuración o definiciones aquí
