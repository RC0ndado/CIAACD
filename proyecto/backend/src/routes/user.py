from flask import Blueprint, request
from ..models import user as user_model

bp = Blueprint("user", __name__)


@bp.route("/user", methods=["POST"])
def create_user():
    data = request.get_json()
    user_model.create_user(data)
    return "received"


# Otros controladores y rutas relacionadas con User...
