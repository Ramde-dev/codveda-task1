
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ramde123#123",
    database: "codveda_practice"
});

connection.connect((error) => {
    if (error) {
        console.error("Database connection failed:", error.message);
        return;
    }

    console.log("Connected to MySQL successfully!");

    connection.query("SELECT * FROM developers", (error, results) => {
        if (error) {
            console.error("Query failed:", error.message);
            connection.end();
            return;
        }

        console.log("Developers:", results);
        connection.end();
    });
});
