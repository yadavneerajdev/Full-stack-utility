const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',  // your connectio name
    user: 'root',       // your databse username
    password: 'password',   // password
    database: 'example'   // database name 
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// POST route for inserting data into the database
app.post('/api/post', (req, res) => {
    const { val1, val2, val3, valn } = req.body;
    const sql = `INSERT INTO "table" (column1, column2, column3,..., columnn) VALUES ('${val1}', '${val2}', '${val3}', '${valn}')`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    });
});

app.get('/api/data', (req, res) => {
    const sql = `SELECT * from "_table_"`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result)
    });
});

app.put('/api/update', (req, res) => {
    const { id, newvalue } = req.body;
    const sql = `UPDATE "_table_" SET column_x = ${newvalue} WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
});

app.delete('/api/delete', (req, res) => {
    const { id } = req.body;
    console.log(id);
    const sql = 'DELETE FROM "_table_" WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting');
        } else {
            console.log(result);
            res.send('Deleted successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
