import FirstClass from '../app/FirstClass';
let chai = require('chai');
let sinon = require("sinon");
let expect = chai.expect;

/** @test {FirstClass} */
describe('FirstClass ',function(){

  /** @test {ClassName#methodName} */
  describe('FirstClass#get',function(){
    it('Excpect 1 to equals 1',function(){
      expect(new FirstClass().get()).to.equals(1);
    });
  });
});
