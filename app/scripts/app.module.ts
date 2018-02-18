/// <reference types="node" />
/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import * as angular from 'angular';
import '@uirouter/angularjs';

// Components
import HomeComponent from './components/home/home.component';
import HeaderComponent from './common/components/header/header.component';
import TodoListComponent from './components/todo-list/todo-list.component';
import TodoItemComponent from './components/todo-list/todo-item/todo-item.component';

// Services
import TodosService from './services/todo-list.service';

interface Todo {
  id: string;
  title: string;
}

interface TodoService {
  getTodos(): Array<Todo>;
}

angular.module('todoApp', ['ui.router'])
  .config([
    '$stateProvider', 
    '$locationProvider', 
    '$urlRouterProvider',
    ($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    const states = [
      {
        name: 'home',
        url: '/',
        component: HomeComponent.NAME
      },
      {
        name: 'todos',
        url: '/todos',
        component: TodoListComponent.NAME,
        resolve: { // описать в компоненте
          todos(todosService: TodoService) {
            return todosService.getTodos();
          }
        }
      },
      {
        name: 'todos.todo',
        url: '/{todoId}',
        component: TodoItemComponent.NAME,
        resolve: { // описать в компоненте
          todo(todos: Array<Todo>, $stateParams: ng.ui.IStateParamsService) {
            return todos.find((todo: Todo) => {
              return todo.id === $stateParams.todoId;
            });
          }
        }
      }
    ];

    $locationProvider.html5Mode(true);
    states.forEach(state => { $stateProvider.state(state); });
    $urlRouterProvider.otherwise('errorPage');
  }])
  .component(HeaderComponent.NAME, new HeaderComponent())
  .component(HomeComponent.NAME, new HomeComponent())
  .component(TodoListComponent.NAME, new TodoListComponent())
  .component(TodoItemComponent.NAME, new TodoItemComponent())
  .service(TodosService.NAME, TodosService);
