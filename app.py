import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        connection = sqlite3.connect('user_info.db')
        cursor = connection.cursor()
        name = request.form['name']
        points = request.form['jsvar']

    return render_template('index.html')