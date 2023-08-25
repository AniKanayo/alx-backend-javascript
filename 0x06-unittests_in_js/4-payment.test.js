// 4-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  before(function() {
    sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  after(function() {
    Utils.calculateNumber.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
