import { Scraper } from '../../app/scraper/scraper'
import test from 'ava'

test.beforeEach(t => {
  t.context.fixturesFolder = './src/test/fixtures/scraper/'
})

test('Basic test', t => {
  t.is('test', 'test')
})

test('Scraper test', t => {
  t.plan(1)
  let scraper = new Scraper()
  return scraper.yahoo().then(res =>{
    console.log(res)
    t.true(true)
  })
})