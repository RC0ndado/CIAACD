# Importar librerias

from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_login import login_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash

# Singleton

auth =  Blueprint('auth', __name__)

# Rutas
@auth.route('/login', methods=['GET', 'POST'])
def login():
    return 'Esto es auth/login'


@auth.route('/logout')
def logout():
    return 'Logout'

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    return 'Esto es sign up'

