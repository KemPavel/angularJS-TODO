class TodoListController implements ng.IController {

  constructor() { }

  public $onInit(): void {
    console.log('todoList.init');
  }

}

export default class TodoListComponent implements ng.IComponentOptions {

  static NAME: string = 'todoListView';
  public controller: any;
  public template: string;
  public bindings: any = { todos: '<' };

  constructor() {
    this.controller = TodoListController;
    this.template = require('./todo-list.component.html');
  }
  
}