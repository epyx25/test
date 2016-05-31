import LoggerFactory from '../../../app/core/logger/LoggerFactory'
import BunyanLogger from '../../../app/core/logger/concrete/BunyanLogger'
import chai from 'chai'
const expect = chai.expect

/** @test {LoggerFactory} */
describe('LoggerFactory ', function () {
  /** @test {LoggerFactory#get} */
  describe('LoggerFactory#get', function () {
    it('Expect logger to equals null', function () {
      expect(LoggerFactory.get('unknown')).to.equals(null)
    })
  })

  /** @test {LoggerFactory#get} */
  describe('LoggerFactory#get', function () {
    it('Expect logger instanceof to equals BunyanLogger', function () {
      expect(LoggerFactory.get('bunyan', {name: 'my-app'})).to.be.an.instanceof(BunyanLogger)
    })
  })
})
