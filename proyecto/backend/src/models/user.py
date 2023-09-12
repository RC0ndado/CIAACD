from . import mongo


def create_user(data):
    return mongo.db.users.insert_one(data)


# Otros métodos relacionados con el modelo User...
