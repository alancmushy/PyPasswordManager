import sqlite3

connection = sqlite3.connect('passwordDatabase.db')

with open('shieldPassSchema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

connection.commit()
connection.close()