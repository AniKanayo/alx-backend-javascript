const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(2.4, 3.7), 6);
    assert.strictEqual(calculateNumber(1.1, 2.9), 4);
  });
});
