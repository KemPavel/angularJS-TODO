import Todo from './todo-item.model';

export default class TodosService {
  static $inject = ['$q', '$http'];
  static NAME: string = 'todosService';

  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService) { }

  // public getAll(): angular.IHttpPromise<any> {
  //    return this.$http.get('http://demo5512590.mockable.io/users');
  // }

  public getTodos(): Array<Todo> {
    const todos: Array<Todo> = [
      {
        title: 'todo_1',
        id: '1'
      },
      {
        title: 'todo_2',
        id: '2'
      }
    ];
    
    return todos;
  }
}