from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
import pymysql
import mysql.connector
from mysql.connector import errorcode



db = SQLAlchemy()
DB_NAME = 'database'



def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://root:A01745312@localhost:3306/database'
    
    pymysql.install_as_MySQLdb()
    
    db.init_app(app)

    from .src.controllers.views import views
    from .src.controllers.auth import auth
    
    # Inicializar rutas
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/auth')
    
    from .src.models.user import User
    
    with app.app_context():
        create_db()
    
    return app



def create_db():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='A01745312',
        )
        
        cursor = connection.cursor()

        # Create database if it doesn't exist
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}`")


        cursor.close()
        connection.close()

        print('Database created or already exists!')
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Access denied. Check your credentials.")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist.")
        else:
            print(err)
