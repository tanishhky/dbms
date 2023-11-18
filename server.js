import { sql } from "@vercel/postgres";

await sql `CREATE TABLE members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    registration_number VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone_number VARCHAR(255) NOT NULL
  );
  `
  console.log("table created");
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'T@n29S@n23',
//   database: 'library_management'
// });

// // Create an Express app
// const app = express();

// // Use body-parser to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Define the route for the form submission
// app.post('/submit', (req, res) => {
//   const firstName = req.body.fname;
//   const lastName = req.body.lname;
//   const email = req.body.email;
//   const registrationNumber = req.body.rno;
//   const address = req.body.address;
//   const phoneNumber = req.body.no;
//   console.log(firstName+lastName+email+registrationNumber+address+phoneNumber);
//   // Insert the data into the database
//   const sql = `INSERT INTO members (first_name, last_name, email, registration_number, address, phone_number) VALUES (?, ?, ?, ?, ?, ?)`;
//   connection.query(sql, [firstName, lastName, email, registrationNumber, address, phoneNumber], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error saving data');
//     } else {
//       res.status(200).send('Data saved successfully');
//     }
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
