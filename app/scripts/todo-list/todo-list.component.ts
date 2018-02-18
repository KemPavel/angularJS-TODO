class TodoListController {
  constructor() {
   }

  protected $onInit(): void {
    console.log('todoList.init');
  }

}

export default class TodoListComponent {

  static NAME: string = 'todoList';
  public controller: any;
  public template: string;
  public bindings: any = { todos: '<' };

  constructor() {
    this.controller = TodoListController;
    this.template = require('./todo-list.component.html');
  }
  
}