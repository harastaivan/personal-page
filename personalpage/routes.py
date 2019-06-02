from flask import render_template
from personalpage import app
import json
from _version import __version__

with open('personalpage/data.json') as f:
    data = json.load(f)


@app.route("/")
def home():
    return render_template('home.html', data=data, version=__version__)


@app.route("/cv")
def cv():
    return render_template('cv.html', data=data, version=__version__)
