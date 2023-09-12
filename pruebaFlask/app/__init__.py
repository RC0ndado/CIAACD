# Importar librerias
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import config

# Importar rutas
from app.routes.main_routes import main 
from app.routes.views import views
from app.routes.auth import auth


# Crear aplicacion
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:A01745312@localhost/pruebaflask'

# Crear bd
db = SQLAlchemy(app)

# Obtener variables de entorno
#app.config.from_object(config)


# Inicializar rutas
app.register_blueprint(main)
app.register_blueprint(auth, url_prefix='/auth')
app.register_blueprint(views, url_prefix='/views')
