class HomeController {
  constructor() { }

  protected $onInit(): void {
    console.log('home.init');
  }

}

export default class HomeComponent {

  static NAME: string = 'home';
  public controller: any;
  public template: string;

  constructor() {
    this.controller = HomeController;
    this.template = require('./home.component.html');
  }

}