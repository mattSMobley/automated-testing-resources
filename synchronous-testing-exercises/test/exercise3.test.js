var Toaster = require('../exercise3');
var chai = require('chai');

var expect = chai.expect;

describe('Testing Toaster Simulator', function() {
  it('should start with a power status of off', function() {
    var t = new Toaster();
    expect(t.powerStatus).to.equal('off');
  })
  it('should start with a toasting status of off', function() {
    var t = new Toaster();
    expect(t.toastingStatus).to.equal('off');
  })
  it('should change the power status to on when power function is called', function() {
    var t = new Toaster();
    t.power();
    expect(t.powerStatus).to.equal('on');
  })
  it('should change the power status to off if it is on', function() {
    var t = new Toaster();
    t.power();
    t.power();
    expect(t.powerStatus).to.equal('off');
  })
  it('when the toaster function is called and the power status is off, the toaster function should not turn to on', function(){
    var t = new Toaster();
    t.toast();
    expect(t.toastingStatus).to.equal('off');
  })
  it('when the toaster function is called and the power status is on, the toaster function should be turned on', function(){
    var t = new Toaster();
    t.power();
    t.toast();
    expect(t.toastingStatus).to.equal('on');
  })
  it('when the power function is called, if the power status is on and the toasting function is on, they should both be turn off', function(){
    var t = new Toaster();
    t.power();
    t.toast();
    t.power();
    expect(t.toastingStatus && t.powerStatus).to.equal('off');
  })


});
