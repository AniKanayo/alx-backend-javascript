const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(req.params.filepath)
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })); // Sort the fields in alphabetical order
        let response = 'This is the list of our students\n';

        fields.forEach((field) => {
          const students = data[field].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).join(', '); // Sort the students' first names and join them by comma
          const count = data[field].length;
          response += `Number of students in ${field}: ${count}. List: ${students}\n`;
        });

        res.status(200).send(response); // Set status to 200 and send the response
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error}`); // Set status to 500 and send the error message
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE'); // Set status to 500 and send the error message
      return;
    }

    readDatabase(req.params.filepath)
      .then((data) => {
        const students = (data[major] || []).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).join(', '); // Sort the students' first names and join them by comma
        const count = data[major] ? data[major].length : 0;
        const response = `List: ${students}`;

        res.status(200).send(response); // Set status to 200 and send the response
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error}`); // Set status to 500 and send the error message
      });
  }
}

module.exports = StudentsController;
