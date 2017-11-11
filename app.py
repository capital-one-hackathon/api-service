from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv(), override=True)

app = Flask(__name__, static_folder="./static/compiled", template_folder="./static")

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("PSQLURL")

db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))
    complete = db.Column(db.Boolean)

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
