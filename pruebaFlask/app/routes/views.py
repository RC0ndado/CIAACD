# Importar librerias

from flask import Blueprint


# Singleton
views = Blueprint('views', __name__)

@views.route('/prueba',  methods=['GET'])
def prueba():
    return "Esto es views"