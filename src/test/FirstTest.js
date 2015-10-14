let chai = require('chai');
let sinon = require("sinon");
let expect = chai.expect;

/** @test {ClassName} */
describe('ClassName ',function(){

  /** @test {ClassName#methodName} */
  describe('Classname#methodName',function(){
    it('Excpect 3 to equals 3',function(){
      var callback = sinon.stub();
      callback.withArgs(42).returns(1);
      expect(callback(42)).to.equals(2);
    });
  });
});
