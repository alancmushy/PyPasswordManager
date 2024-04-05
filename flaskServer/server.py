from flask  import Flask, request,json, redirect, url_for,jsonify
import sqlite3

app = Flask(__name__)


connection = sqlite3.connect('passwordDatabase.db', check_same_thread=False)
connCursor = connection.cursor()


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
        return jsonify("True")
    
        
    else:  
        print("It failed")
        return jsonify("False")
    
@app.route('/homepage',methods=["GET"])
def home():
    return {"title":["ShieldPass"]} 

@app.route('/passwords/{username}',methods=["GET"])
def passwords():
    return {"Test":["Test"]}

@app.route('/passwords/{username}',methods=['POST'])
def displayPasswords():
    return {"Test":["Test"]}


if __name__ == "__main__":
    app.run(debug=True)