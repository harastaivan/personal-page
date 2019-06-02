from flask import render_template
from personalpage import app
import json

with open('personalpage/data.json') as f:
    data = json.load(f)


@app.route("/")
def home():
    return render_template('home.html', data=data)


@app.route("/cv")
def cv():
    return render_template('cv.html', data=data)
