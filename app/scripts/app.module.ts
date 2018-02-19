/// <reference types="node" />
/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import * as angular from 'angular';
import '@uirouter/angularjs';

// Components
import AppComponent from './app.component';
import HomeComponent from './components/home/home.component';
import HeaderComponent from './common/components/header/header.component';
import TodoListComponent from './components/todo-list/todo-list.component';
import TodoItemComponent from './components/todo-list/todo-item/todo-item.component';

// Services
import TodosService from './services/todo-list/todo-list.service';

// Models 
import Todo from './services/todo-list/todo-item.model';


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
        resolve: { // file-name.resolver.ts
          todos(todosService: TodosService) {
            return todosService.getTodos();
          }
        }
      },
      {
        name: 'todos.todo',
        url: '/{todoId}',
        component: TodoItemComponent.NAME,
        resolve: { // file-name.resolver.ts
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
  .component(AppComponent.NAME, new AppComponent())
  .component(HeaderComponent.NAME, new HeaderComponent())
  .component(HomeComponent.NAME, new HomeComponent())
  .component(TodoListComponent.NAME, new TodoListComponent())
  .component(TodoItemComponent.NAME, new TodoItemComponent())
  .service(TodosService.NAME, TodosService);
