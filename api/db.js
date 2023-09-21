import mysql from "mysql";

// if there is auth problem
//  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blog",
});
