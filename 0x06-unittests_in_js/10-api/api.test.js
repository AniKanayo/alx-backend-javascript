const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  test('should return correct status code', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(error).to.be.null; // Check for no error
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  test('should return correct result', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(error).to.be.null; // Check for no error
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart Page', () => {
    test('should return correct status code when :id is a number', (done) => {
      request('http://localhost:7865/cart/123', (error, response, body) => {
        expect(error).to.be.null; // Check for no error
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    test('should return correct status code when :id is NOT a number (=> 404)', (done) => {
      request('http://localhost:7865/cart/abc', (error, response, body) => {
        expect(error).to.be.null; // Check for no error
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

describe('Login Page', () => {
  test('should return correct status code', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'John' }
      },
      (error, response, body) => {
        expect(error).to.be.null;
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  test('should return correct result', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'John' }
      },
      (error, response, body) => {
        expect(error).to.be.null;
        expect(body).to.equal('Welcome John');
        done();
      }
    );
  });
});

describe('Available Payments Page', () => {
  test('should return correct status code', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  test('should return correct result', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(error).to.be.null;
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
