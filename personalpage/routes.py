from flask import render_template
from personalpage import app

data = {
    'first_name': 'Ivan',
    'last_name': 'Harasta',
    'email': 'harasta.ivan@gmail.com',
    'phone': {
        'prefix': '+420',
        'number': [
            '775',
            '412',
            '486'
        ]
    },
    'links': [
        {
            'name': 'GitHub',
            'url': 'https://github.com/harastaivan'
        },
        {
            'name': 'Twitter',
            'url': 'https://twitter.com/harastaivan'
        },
        {
            'name': 'LinkedIn',
            'url': 'https://www.linkedin.com/in/ivan-hara%C5%A1ta-259342131/'
        }
    ]
}


@app.route("/")
def home():
    return render_template('home.html', data=data)
