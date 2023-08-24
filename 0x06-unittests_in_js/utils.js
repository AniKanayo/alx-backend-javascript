// utils.js
const Utils = {
  calculateNumber: function(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    return roundedA + roundedB;
  }
};

module.exports = Utils;
