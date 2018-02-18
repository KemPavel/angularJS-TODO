class TodoItemController implements ng.IController {
  constructor() {
   }

  public $onInit(): void {
    console.log('TodoItem.init');
  }

}

export default class TodoItemComponent implements ng.IComponentOptions {

  static NAME: string = 'todoItem';
  public controller: any;
  public template: string;
  public bindings: any = { todo: '<' };

  constructor() {
    this.controller = TodoItemController;
    this.template = require('./todo-item.component.html');
  }
  
}