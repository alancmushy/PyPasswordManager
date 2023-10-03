from flask import Flask, request, redirect
import sqlite3

app = Flask(__name__)

currentUser = None

connection = sqlite3.connect('passwordDatabase.db', check_same_thread=False)
connCursor = connection.cursor()

@app.route('/homepage')
def home():
    return {"title":["ShieldPass"]} 

@app.route('/homepage', methods=['POST'])
def logIn():
    data = request.get_json()
    username = data['user']
    password = data['pass']
    
    result = connCursor.execute("""SELECT userName,pass_word
                   FROM users
                   WHERE userName=?
                       AND pass_word=?""",
                (username, password)).fetchone()

    
    
    if result:
        print("User and Password Found")
        print(result)
        return redirect("/passwords/<{username}>")
    else:  
        print("It failed")
        return "Failure"
    
    
@app.route("/passwords/<username>")
def displayPasswords(username):
    passResults = connCursor.execute("""SELECT passwordWebsite,passwordText
                   FROM usersPasswords
                   WHERE userName=?""",
                (username)).fetchall()
    
    return passResults


if __name__ == "__main__":
    app.run(debug=True)