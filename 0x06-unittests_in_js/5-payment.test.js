const { expect } = require('chai');
const { it, describe, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.assert.calledOnce(consoleSpy);
    consoleSpy.restore();
  });

  it('should log the correct message for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120');
  });

  it('should log the correct message for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20');
  });
});
