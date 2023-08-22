const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error); // Reject the promise with the error if unable to read the file
      } else {
        const result = {}; // Create an object to store the arrays of first names per field
        const lines = data.split('\n'); // Split the data by line
        lines.shift(); // Remove the header line

        lines.forEach((line) => {
          const fields = line.split(','); // Split each line by comma
          const field = fields[3]; // Get the value of the field (assuming it's the fourth element)
          const firstName = fields[0]; // Get the value of the first name (assuming it's the first element)

          if (result[field]) {
            result[field].push(firstName); // Add the first name to the existing field array
          } else {
            result[field] = [firstName]; // Create a new field array and add the first name
          }
        });

        resolve(result); // Resolve the promise with the object of arrays of first names per field
      }
    });
  });
}

module.exports = readDatabase;
