const express = require('express');
const { argv } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!'); // Sends "Hello Holberton School!" as the response
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n'); // Writes "This is the list of our students" as the response

  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database'); // Throws an error if there is an error reading the database file
    }

    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(',')); // Splits each line of the file by comma and adds it to the result array
    });

    result.shift(); // Removes the first element (header) from the result array

    const newis = [];
    result.forEach((data) => newis.push([data[0], data[3]])); // Creates arrays with 1st & 4th elem

    const fields = new Set();
    newis.forEach((item) => fields.add(item[1])); // Creates a Set of values from the 2nd the row

    const final = {};
    fields.forEach((data) => { (final[data] = 0); }); // Initializes an object with keys from d Set

    newis.forEach((data) => { (final[data[1]] += 1); }); // Increments the count for each value

    res.write(`Number of students: ${result.filter((check) => check.length > 3).length}\n`); // Writes  number of students (rows with more than 3 elements) as the response

    Object.keys(final).forEach((data) => res.write(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // Writes the number of students in each field, along with the list of students in that field,

    res.end(); // Ends the response
  });
});

app.listen(1245); // Starts the server listening on port 1245

module.exports = app; // Exports the app variable for use in other files
