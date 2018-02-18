class HeaderController {
  constructor() { }

  protected $onInit(): void {
    console.log('header.init');
  }

}

export default class HeaderComponent {

  static NAME: string = 'appHeader';
  public controller: any;
  public template: string;

  constructor() {
    this.controller = HeaderController;
    this.template = require('./header.component.html');
  }
  
}