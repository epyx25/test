import {ConfReader} from './core/conf/confReader'
import {LoggerFactory} from './core/logger/loggerFactory'
/**
* Application class, Entry point of the application
*/
class Application {

  /**
  * The main method, the entry point of the application
  * @param {Object} argv Arguments from process.argv
  */
  static main (argv) {
    const configuration = new ConfReader().read(__dirname + '/conf/' + argv[2] + '.yml')
    const logger = LoggerFactory.get('bunyan', {name: configuration.application.name})
    logger.info('Super app is started !')
  }
}

// We run the main method of the Application class
Application.main(process.argv)
