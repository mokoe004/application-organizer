const { stat } = require("fs");
const init = require("./db.js");
init();
const dbFilePath = "./database/database.db";
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(dbFilePath);

class Application {
  constructor(id, company, email, description, status, created_at) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.description = description;
    this.status = status;
    this.created_at = created_at;
  }
}

//For Status Options an color
class ApplicationStatus {
  static OPEN = "open";
  static CONFIRM = "confirm";
  static REJECTED = "rejected";
}

let status = [
  {
    name: "Open",
    color: "orange-400 ",
  },
  {
    name: "Confirmed",
    color: "green-500",
  },
  {
    name: "Rejected",
    color: "red-500",
  },
];

let applications = [
  new Application(
    1,
    "Google",
    "email@email.de",
    "Frontend Developer",
    ApplicationStatus.OPEN,
    "2021-10-01"
  ),
  new Application(
    2,
    "Microsoft",
    "email@email.de",
    "Software Engineer",
    ApplicationStatus.CONFIRM,
    "2021-10-05"
  ),
  new Application(
    3,
    "Amazon",
    "email@email.de",
    "Data Analyst",
    ApplicationStatus.REJECTED,
    "2021-10-10"
  ),
];
db.all("SELECT * FROM applications", (err, rows) => {
  if (err) {
    throw err;
  }

  // Verarbeite die gelesenen Daten
  rows.forEach((row) => {
    applications.push(
      new Application(
        row.id,
        row.company,
        row.email,
        row.description,
        row.status,
        row.date
      )
    );
  });

  // Schließe die Datenbankverbindung
  db.close();
});

let addApplication = (obj) => {
  const db = new sqlite3.Database(dbFilePath);
  console.log("Connected to database for Insert");

  db.run(
    "INSERT INTO applications (company, description, email, status, date) VALUES (?, ?, ?, ?, ?)",
    [
      `${obj.company}`,
      `${obj.description}`,
      `${obj.email}`,
      `${obj.status}`,
      `${obj.date}`,
    ]
  );
  db.close();
  console.log(obj.company + ": Successfully added in Database")
};

module.exports = { applications, status, addApplication };
