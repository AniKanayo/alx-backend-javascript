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

  describe('Cart Page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request('http://localhost:7865/cart/123', (error, response, body) => {
        expect(error).to.be.null; // Check for no error
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct status code when :id is NOT a number (=> 404)', (done) => {
      request('http://localhost:7865/cart/abc', (error, response, body) => {
        expect(error).to.be.null; // Check for no error
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    // Add any additional tests for the cart page if needed
  });
});
