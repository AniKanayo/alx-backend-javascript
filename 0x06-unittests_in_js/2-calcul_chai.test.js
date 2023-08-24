const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('type SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 2.4, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 1.1, 2.9)).to.equal(4);
    });
  });

  describe('type SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 5.5, 2.3)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 10.9, 4.2)).to.equal(7);
    });
  });

  describe('type DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 11.9, 3)).to.equal(4);
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 12, 0)).to.equal('Error');
    });
  });
});
