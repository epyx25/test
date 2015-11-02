import ConfReader from './app/core/conf/ConfReader';
/**
* Application class, Entry point of the application
*/
class Application{

  /**
  * The main method, the entry point of the application
  */
  static main(argv){
    let configuration = new ConfReader().read('./dist/conf/'+argv[2]+'.yml');
  }
}

// We run the main method of the Application class
Application.main(process.argv);
