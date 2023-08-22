const express = require('express');
const fs = require('fs');
const { argv } = require('process');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = argv[2];
  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.send('Cannot load the database');
    } else {
      const students = data.split('\n').filter((line) => line !== '');
      res.send(`This is the list of our students\n${students.join('\n')}`);
    }
  });
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
