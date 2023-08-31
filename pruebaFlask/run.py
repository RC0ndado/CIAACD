from app import app, db
from app.routes.main_routes import main  # Importa desde main_routes
from app.models.user import User



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
