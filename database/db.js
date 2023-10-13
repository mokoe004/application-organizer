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

db.run("CREATE TABLE IF NOT EXISTS applications (id INTEGER PRIMARY KEY, company VARCHAR(60), description VARCHAR(100), status BOOLEAN, date VARCHAR(15))");
db.close();
db.run("INSERT INTO applications (company, description, status, date) VALUES (?, ?, ?, ?)", ["John Doe", "Pending", "true","23-23-2333" ]);

db.all("SELECT * FROM applications", (selectErr, rows) => {
  if (selectErr) {
    console.error('Fehler beim Abrufen der Datensätze:', selectErr);
  } else {
    // Gib die abgerufenen Datensätze in der Konsole aus
    rows.forEach(row => {
      console.log(`ID: ${row.id}, Company: ${row.company}, Description: ${row.description}, Status: ${row.status}, Date: ${row.date}`);
    });
  }
});

db.close();
console.log("Db connection closed");
}
