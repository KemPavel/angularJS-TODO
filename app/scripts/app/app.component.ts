const app = {
    template: require('./app.html'),
    controller: function() { console.log('app.controller'); }
  }
  // .component('header', {

  // })
  // .component('footer', {

  // })

export default app;


//  BEST PRACTICE
// class AppController implements ng.IController {
//   static $inject = ['$state'];
//   constructor(public $state: ng.ui.IStateService) {
//     $state.go('app.home');
//   }
// }

// export class AppComponent implements ng.IComponentOptions {
//   static NAME: string = 'appView';
//   controller: any;
//   templateUrl: any;
//   constructor() {
//     this.controller = AppController;
//     this.templateUrl = require('./app.component.html');
//   }
// }