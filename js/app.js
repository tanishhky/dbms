const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3306;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'T@n29S@n23', // Replace with your MySQL password
  database: 'last', // Replace with your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/addMember', (req, res) => {
  const { name, email } = req.body;

  pool.query('INSERT INTO members (name, email) VALUES (?, ?)', [name, email], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving member to database');
    } else {
      res.status(200).send('Member saved to database');
    }
  });
});

app.get('/viewMembers', (req, res) => {
  pool.query('SELECT * FROM members', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving members from database');
    } else {
      res.status(200).json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
