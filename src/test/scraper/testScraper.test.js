import { Scraper } from '../../app/scraper/scraper'
import test from 'ava'

test.beforeEach(t => {
  t.context.fixturesFolder = './src/test/fixtures/scraper/'
})

test('Basic test', t => {
  t.is('test', 'test')
})

test('Scraper test', async t => {
  await new Scraper().run()
  t.is('test', 'test')
})