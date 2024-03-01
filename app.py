import sqlite3
import random
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        #Get the name and score of the player
        connection = sqlite3.connect('user_info.db')
        cursor = connection.cursor()
        name = request.form['name']
        points = request.form['jsvar']

        #Search if the user exists
        query = "SELECT Points FROM users where name= '"+name+"'"
        cursor.execute(query)
        
        results = cursor.fetchall()

        #Create a new user in db if name doesn't exist
        if len(results) == 0:
            #Loop until unique id is found
            randID = str(random.randint(0, 1000));
            query = f"SELECT * FROM users where id= {randID}"
            cursor.execute(query)
            results = cursor.fetchall()
            while (len(results) != 0):
                randID = random.Random()
                query = f"SELECT * FROM users where id= {randID}"
                cursor.execute(query)
                results = cursor.fetchall()

            #Add user to the database
            cursor.execute("INSERT INTO users VALUES ('"+name+"', '"+randID+"', '"+points+"')")
            connection.commit()
        else:
            #Update the user's score if the new score is higher
            if results[0][0] < points:
                cursor.execute("UPDATE users SET Points='"+points+"' WHERE name= '"+name+"'")
                connection.commit()
        return redirect(url_for('leaderboard'))
    
    return render_template('index.html')

@app.route('/leaderboard', methods=['GET', 'POST'])
def leaderboard():
    connection = sqlite3.connect('user_info.db')
    cursor = connection.cursor()
    query = "SELECT name,points FROM users ORDER BY Points DESC LIMIT 10"
    cursor.execute(query)
    result = cursor.fetchall()

    if request.method == 'POST':
        name = request.form['name']
        #Search if the user exists
        query = "SELECT Name FROM users where name= '"+name+"'"
        cursor.execute(query)
        
        results = cursor.fetchall()

        #Remove the user from db if they exist
        if len(results) != 0:
            query = "DELETE FROM users WHERE name= '"+name+"'"
            cursor.execute(query)
            connection.commit()

    return render_template('leaderboard.html', result=result)