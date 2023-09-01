from flask import Blueprint, render_template, request, flash, redirect, url_for
from ... import db
from flask_login import login_user, current_user
from ..models.user import User
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        
        if password is None:
            flash('Password cannot be empty', category='error')
        else:
            user = User.query.filter_by(email=email).first()

            if user:
                if check_password_hash(user.password, password):
                    flash('Logged in successfully', category='success')
                    login_user(user)
                    return redirect(url_for('.views.home'))
                else: 
                    flash('Incorrect password', category='error')
            else:
                flash('Email does not exist', category='error')
    return render_template("login.html", boolean=True, user=current_user)


@auth.route('/logout')
def logout():
    return "<p>Logout</p>"

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        first_Name = request.form.get('firstName')
        password = request.form.get('password')
        password2 = request.form.get('password2')
        
        user = User.query.filter_by(email=email).first()

        if user:
            flash('Email already exists', category='error')       
        elif email is None:
            flash('Email cannot be empty', category='error')
        elif len(email) < 5:
            flash('Email must be at least 5 characters', category='error')
        elif first_Name is None: 
            flash('First name cannot be empty', category='error')
        elif len(first_Name) < 2: 
            flash('First name must be at least 2 characters', category='error')
        elif password is None:
            flash('Password cannot be empty', category='error')
        elif password != password2:
            flash('Passwords do not match', category='error')
        elif len(password) < 8: 
            flash('Password must be at least 8 characters', category='error')
        else:
            new_user = User(email=email, first_Name=first_Name, password=generate_password_hash(password, method='sha256'))
            db.session.add(new_user) 
            db.session.commit() 
            flash('Account created', category='success')
            return redirect(url_for('.views.home'))
        
        
    return render_template("sign-up.html", user=current_user)