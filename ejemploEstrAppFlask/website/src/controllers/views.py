from flask import Blueprint, render_template, request

# Singleton
views = Blueprint('views', __name__)

@views.route('/',  methods=['GET'])
def home():
    return render_template("home.html")