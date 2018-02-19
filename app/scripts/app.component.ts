// Styles
import '../styles/main.scss';

class AppController implements ng.IController {
  constructor() { }

  public $onInit(): void {
    console.log('app.init');
  }

}

export default class AppComponent implements ng.IComponentOptions {

  static NAME: string = 'app';
  public controller: any;
  public template: string;

  constructor() {
    this.controller = AppController;
    this.template = require('./app.component.html');
  }
  
}