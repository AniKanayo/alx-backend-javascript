const fs = require('fs');
// eslint-disable-next-line no-unused-vars
const path = require('path');

function countStudents(path) {
  try {
    const filePath = path.resolve(__dirname, path);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    console.log(`Number of students: ${lines.length}`);

    const headers = lines[0].split(',').map((field) => field.trim());
    const students = lines.slice(1);

    headers.forEach((header) => {
      const fieldIndex = headers.indexOf(header);
      const studentsInField = students.reduce((count, student) => {
        const fields = student.split(',').map((field) => field.trim());
        if (fields[fieldIndex] !== '') {
          return count + 1;
        }
        return count;
      }, 0);

      const firstNames = students
        .map((student) => student.split(',')[0].trim())
        .filter((firstName) => firstName !== '');

      console.log(`Number of students in ${header}: ${studentsInField}. List: ${firstNames.join(', ')}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
  }
}

countStudents('database.csv');

module.exports = countStudents;
