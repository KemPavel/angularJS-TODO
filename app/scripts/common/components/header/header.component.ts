class HeaderController implements ng.IController {
  constructor() { }

  public $onInit(): void {
    console.log('header.init');
  }

}

export default class HeaderComponent implements ng.IComponentOptions {

  static NAME: string = 'appHeader';
  public controller: any;
  public template: string;

  constructor() {
    this.controller = HeaderController;
    this.template = require('./header.component.html');
  }
  
}