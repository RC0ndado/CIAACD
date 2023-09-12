from . import user


def register_routes(app):
    app.register_blueprint(user.bp)
