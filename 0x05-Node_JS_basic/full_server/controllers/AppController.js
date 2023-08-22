class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!'); // Set status to 200 and send the message as the response
  }
}

module.exports = AppController;
