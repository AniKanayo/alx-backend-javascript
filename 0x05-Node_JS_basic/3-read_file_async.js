// Import the file system module
const fs = require('fs');

// Define an asynchronous function that returns a promise
const countStudents = async (path) => {
  // Check if the file exists
  if (fs.existsSync(path)) {
    // Return a new promise
    return new Promise((resolve) => {
      // Read the file asynchronously
      fs.readFile(path, 'utf8', (err, data) => {
        // If an error occurs (e.g., the file does not exist), throw an error
        if (err) {
          throw Error('Cannot load the database');
        }
        const result = [];
        // Split the data by new lines and then by commas to get an array of arrays
        data.split('\n').forEach((data) => {
          result.push(data.split(','));
        });
        // Remove the first row (headers)
        result.shift();
        const newis = [];
        // Create a new array with only the first and fourth columns (student name and field)
        result.forEach((data) => newis.push([data[0], data[3]]));
        const fields = new Set();
        // Create a set of unique fields
        newis.forEach((item) => fields.add(item[1]));
        const final = {};
        // Initialize a counter for each field
        fields.forEach((data) => { (final[data] = 0); });
        // Count the number of students in each field
        newis.forEach((data) => { (final[data[1]] += 1); });
        // Log the total number of students
        console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
        // Log the number of students in each field and a list of their names
        Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        // Resolve the promise with the result, final, and newis arrays
        resolve(result, final, newis);
      });
    });
  }
  // If the file does not exist, throw an error
  throw Error('Cannot load the database');
};

// Export the function
module.exports = countStudents;
