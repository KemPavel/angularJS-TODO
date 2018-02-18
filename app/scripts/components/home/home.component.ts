class HomeController implements ng.IController {
  constructor() { }

  public $onInit(): void {
    console.log('home.init');
  }

}

export default class HomeComponent implements ng.IComponentOptions {

  static NAME: string = 'homeView';
  public controller: any;
  public template: string;

  constructor() {
    this.controller = HomeController;
    this.template = require('./home.component.html');
  }

}