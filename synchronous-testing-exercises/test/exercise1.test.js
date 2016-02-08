var math = require('../exercise1');
var chai = require('chai');

var expect = chai.expect;

describe('Testing math library', function(){
  describe('Testing addition', function(){
    it('should add 1+1 to equal 2', function(){
      expect(math.add(1,1)).to.equal(2);
    })
    it('should add 2+4 to equal 6', function(){
      expect(math.add(2,4)).to.equal(6);
    })
    it('should add 208+102 to equal 310', function(){
      expect(math.add(208,102)).to.equal(310);
    })

  });
  describe('Testing subtraction', function(){
    it('should subtract 1-1 to equal 0', function(){
        expect(math.subtract(1,1)).to.equal(0);
    })
    it('should subtract 2-4 to equal -2', function(){
      expect(math.subtract(2,4)).to.equal(-2);
    })

  });
  describe('Testing multiplication', function(){
    it('should multiply 1x1 to equal 1', function(){
      expect(math.multiply(1,1)).to.equal(1);
    })
    it('should multiply 2x4 to equal 8', function(){
      expect(math.multiply(2,4)).to.equal(8);
    })
  });
  describe('Testing division', function(){
    it('should divide 1/2 to equal .5', function(){
      expect(math.divide(1,2)).to.equal(.5);
    })
    it('should divide 8/4 to equal 2', function(){
      expect(math.divide(8,4)).to.equal(2);
    })
  });
  describe('Testing power of', function(){
    it('should multiply 2 by a power of 3', function(){
      expect(math.power(2,3)).to.equal(8);
    })
    it('should multiply 3 by a power of 5', function(){
      expect(math.power(3,5)).to.equal(243);
    })
  });
  describe('Testing square root of', function(){
    it('should find the square root of 9', function(){
      expect(math.squareroot(9)).to.equal(3);
    })
    it('should find the square root of 25', function(){
      expect(math.squareroot(25)).to.equal(5);
    })
  });



});
