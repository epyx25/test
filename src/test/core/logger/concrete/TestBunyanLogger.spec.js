import BunyanLogger from '../../../../app/core/logger/concrete/BunyanLogger'
import spies from 'chai-spies'
import chai from 'chai'
chai.use(spies)
const expect = chai.expect

/** @test {BunyanLogger} */
describe('BunyanLogger ', () => {
  let logger

  beforeEach(() => {
    logger = new BunyanLogger({name: 'app'})
  })

  /** @test {BunyanLogger#info} */
  describe('BunyanLogger#info', () => {
    it('Expect logger to log at level info', () => {
      const spy = chai.spy.on(logger.logger, 'info')
      logger.info('Info level')
      expect(spy).to.have.been.called.once
    })
  })

  /** @test {BunyanLogger#debug} */
  describe('BunyanLogger#debug', () => {
    it('Expect logger to log at level debug', () => {
      const spy = chai.spy.on(logger.logger, 'debug')
      logger.debug('Debug level')
      expect(spy).to.have.been.called.once
    })
  })

  /** @test {BunyanLogger#warn} */
  describe('BunyanLogger#warn', () => {
    it('Expect logger to log at level warn', () => {
      const spy = chai.spy.on(logger.logger, 'warn')
      logger.warn('Warn level')
      expect(spy).to.have.been.called.once
    })
  })

  /** @test {BunyanLogger#error} */
  describe('BunyanLogger#error', () => {
    it('Expect logger to log at level error', () => {
      const spy = chai.spy.on(logger.logger, 'error')
      logger.error('Error level')
      expect(spy).to.have.been.called.once
    })
  })
})
