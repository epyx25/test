import osmosis from 'osmosis'
import Nightmare from 'nightmare'


export class Scraper {
  data = null;
  // http://www.oddsportal.com/tennis/netherlands/atp-rotterdam-2014/results/
  // for name test
  url = 'http://www.oddsportal.com/tennis/spain/wta-mallorca/results/'
  async run(){
    let nightmare = Nightmare()
    var _this = this
    return await nightmare
      .on('console', (log, msg) => {
          console.log(msg)
      })
      .goto(this.url)
      .wait('#tournamentTable table')
      .evaluate(()=>{
        let data = {matches:[]}, match = {}, participants = ''
        let tt = $('#tournamentTable table tr:first a:nth-child(5)').html()
        /*
        let games = $('#tournamentTable table tr.deactivate').each(function(){
          let row = $(this)
          // date
          if (row.hasClass('nob-border')) {
          }
          // match row
          if (row.hasClass('deactivate')) {
            match = {}
            let partEl = row.find('td.table-participant')
            participants = partEl.text()
            match.link = partEl.find('a').attr('href')
            match.score = row.find('td.table-score').text()
            let players = participants.split(' - ')
            let winnerPlayer = partEl.find('a span').text()
            match.start = row.find('td:first')
                              .attr('class')
                              .replace('-1-1-0-0 ', '')
                              .replace('table-time datet t', '')
            match.player1 = players[0]
            match.player2 = players[1]
            match.winner = players[0] === winnerPlayer ? 1 : 2
            data.matches.push(match)
          }

        })
        */
        data.tournament = tt
        return data
      })/*
      .end()
      .then(function(title){
        //console.log(title);
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });*/
  }

  async yahoo(){
    let nightmare = Nightmare()
    return await nightmare
      .goto('http://yahoo.com')
      .type('form[action*="/search"] [name=p]', 'github nightmare')
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href;
      });
  }
}