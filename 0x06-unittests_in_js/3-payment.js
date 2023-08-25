// 3-payment.js
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The sum is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
