from flask import Flask, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension
from calculation import *
from markov import *
import os


app = Flask(__name__)

app.secret_key = os.environ.get("FLASK_SECRET_KEY", "FLASK_KEY")


@app.route('/login', methods=['GET'])
def display_login_form():
    """ Display log-in form """

    return render_template('login.html')


@app.route('/login', methods=['POST'])
def log_in_user():
    """ Log in user after credentials are validated """

    # Log the user in, verifying their credentials

    return redirect('/')


@app.route('/logout')
def log_user_out():
    """ Log user out and redirect to log-in page """

    # Delete session, flash logout message, redirect

    return redirect('/login')

if __name__ == "__main__":

    connect_to_db(app, db_uri=os.environ.get("DATABASE_URL"))
    db.create_all()

    # Use the DebugToolbar
    DebugToolbarExtension(app)

    DEBUG = "NO_DEBUG" not in os.environ
    PORT = int(os.environ.get("PORT", 5000))

    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
