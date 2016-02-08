var tax = require('../exercise2');
var chai = require('chai');

var expect = chai.expect;


describe('Testing tax calculator', function(){
  it('should tax the first $10 at 10%', function(){
    expect(tax.tax(10)).to.equal(11);
  })
  it('should tax anything under $10 at 10%', function(){
    expect(tax.tax(4)).to.equal(4.4);
  })
  it('should tax the second $10 at 7%', function(){
    expect(tax.tax(20)).to.equal(21.70);
  })
  it('should tax 10% to the first $10 and 7% to anything else up to $20', function(){
    expect(tax.tax(14)).to.equal(15.28);
  })
  it('should tax the third $10 at 5%', function(){
    expect(tax.tax(30)).to.equal(32.20);
  })
  it('should tax the first $10 at 10%, the second $10 at 7%, and anything else up to $30 at 5%', function(){
    expect(tax.tax(27)).to.equal(29.05);
  })
  it('should tax the first $10 at 10%, the second $10 at 7%, the third $10 at 5%, and anything else by 3%', function(){
    expect(tax.tax(40)).to.equal(42.50);
  })





});
