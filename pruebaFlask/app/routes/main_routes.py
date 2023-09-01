from flask import Blueprint

main = Blueprint('main', __name__)

@main.route('/home')
def index():
    return 'Hello, Flask!'
