const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Rest of the test code

    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);

    calculateNumberStub.restore();
  });

  it('should log the correct message', () => {
    const consoleSpy = sinon.spy(console, 'log');

    // Rest of the test code

    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    consoleSpy.restore();
  });
});
