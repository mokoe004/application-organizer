const fs = require('fs');
const dbFilePath = './database/database.db';
const sqlite3 = require('sqlite3').verbose();

module.exports = () => {
//Create empty database if not exist already
if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, '');
    console.log(`Database created at ${dbFilePath}`);
  }
const db = new sqlite3.Database(dbFilePath);
console.log("Connected to database");

db.run("CREATE TABLE IF NOT EXISTS applications (id INTEGER PRIMARY KEY, company VARCHAR(60), description VARCHAR(100), email VARCHAR(25), status BOOLEAN, date VARCHAR(15))");
// db.run("INSERT INTO applications (company, description, email, status, date) VALUES (?, ?, ?, ?, ?)", ["John Doe", "Pending","oasijf@gmail.com", "open","23-23-2333" ]);

db.close();
console.log("Db connection closed");
}
