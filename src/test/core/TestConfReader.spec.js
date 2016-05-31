import ConfReader from '../../app/core/conf/ConfReader'
import Chai from 'chai'
const expect = Chai.expect

/** @test {ConfReader} */
describe('ConfReader ', function () {
  let confReader

  /**
  * Generate the ConfReader
  */
  before(function () {
    confReader = new ConfReader()
  })

  /** @test {ConfReader#read} */
  describe('ConfReader#read', function () {
    it('Expect database name to equals "test"', function () {
      const result = confReader.read('./src/conf/dev.yml')
      expect(result.database.name).to.equals('test')
    })
  })

  /** @test {ConfReader#read} */
  describe('ConfReader#read', function () {
    it('Expect database name to equals null', function () {
      const result = confReader.read('./src/conf/dev.yml')
      expect(result.database.toto).to.equals(undefined)
    })
  })

  /** @test {ConfReader#read} */
  describe('ConfReader#read', function () {
    it('Expect database name to equals null', function () {
      const result = confReader.read('./src/conf/test.yml')
      expect(result).to.equals(null)
    })
  })
})
