const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and log the correct message', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
