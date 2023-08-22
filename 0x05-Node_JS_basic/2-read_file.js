const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  // Check if the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const students = [];
  const fields = {};

  // Read the file and parse the CSV data
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (row) => {
      // Ignore empty lines
      if (row.field && row.firstname) {
        students.push(row);
        if (!fields[row.field]) {
          fields[row.field] = [];
        }
        fields[row.field].push(row.firstname);
      }
    })
    .on('end', () => {
      console.log(`Number of students: ${students.length}`);
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    });
}

module.exports = countStudents;
