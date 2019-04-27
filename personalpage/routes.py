from flask import render_template
from personalpage import app
import json

with open('personalpage/data.json') as f:
    data = json.load(f)


@app.route("/")
def home():
    return render_template('home.html', data=data)
