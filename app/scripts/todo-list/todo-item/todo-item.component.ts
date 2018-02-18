class TodoItemController {
  constructor() {
   }

  protected $onInit(): void {
    console.log('TodoItem.init');
  }

}

export default class TodoItemComponent {

  static NAME: string = 'todoItem';
  public controller: any;
  public template: string;
  public bindings: any = { todo: '<' };

  constructor() {
    this.controller = TodoItemController;
    this.template = require('./todo-item.component.html');
  }
  
}