from flask_pymongo import PyMongo

mongo = PyMongo()


def configure_app(app):
    app.config["MONGO_URI"] = "mongodb://localhost/machinePy"
    mongo.init_app(app)
