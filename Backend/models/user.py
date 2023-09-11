# models/user.py
from marshmallow import Schema, fields, validate

class UserSchema(Schema):
    _id = fields.Str()  # Opcional si deseas definir tu propio ID
    name = fields.Str(required=True)
    lastname = fields.Str(required=True)  # Nuevo campo lastname
    email = fields.Email(required=True)
    password = fields.Str(required=True)
    phone = fields.Str(validate=validate.Length(min=10, max=15))
    user_type = fields.Str(validate=validate.OneOf(["seller", "user"]), required=True)
