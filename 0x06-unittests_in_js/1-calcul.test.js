const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should return the sum of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 1.1, 2.9), 4);
    });
  });

  describe('type SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.3), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 10.9, 4.2), 7);
    });
  });

  describe('type DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 11.9, 3), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 12, 0), 'Error');
    });
  });
});
