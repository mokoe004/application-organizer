// const init = require("./db.js");
// init();
// const dbFilePath = "./database.db";
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(dbFilePath);

class Application {
  constructor(id, company, email, description, status, created_at) {
    this.id = id;
    this.company = company;
    this.email = email
    this.description = description;
    this.status = status;
    this.created_at = created_at;
  }
}

let applications = [
    new Application(1, "Google","email@email.de", "Frontend Developer", true, "2021-10-01"),
    new Application(2, "Microsoft","email@email.de", "Software Engineer", true, "2021-10-05"),
    new Application(3, "Amazon","email@email.de", "Data Analyst", false, "2021-10-10")
];

// db.all("SELECT * FROM applications", (err, rows) => {
//   if (err) {
//     throw err;
//   }

//   // Verarbeite die gelesenen Daten
//   rows.forEach((row, index) => {
//     applications[index] = new Application(
//       row.id,
//       row.company,
//       row.description,
//       row.status,
//       row.date
//     );
//   });

//     // Schließe die Datenbankverbindung
//     db.close();
//   });

module.exports.applications = applications;
