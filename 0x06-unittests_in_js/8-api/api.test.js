const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  it('should return correct status code', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(error).to.be.null; // Check for no error
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(error).to.be.null; // Check for no error
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Any additional tests may be here if needed
});
