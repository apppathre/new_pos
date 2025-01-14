// config/dbConfig.js
import { createConnection } from "mysql";
const connection = createConnection({
  host: "localhost", // Replace with your database host
  user: "root", // Replace with your database username
  password: "", // Replace with your database password
  database: "lord_shiva_erp", // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

export default connection;
