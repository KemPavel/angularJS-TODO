import * as angular from 'angular';
import '@uirouter/angularjs';

import app from './app/app.component';

angular.module('todoApp', ['ui.router'])
  .config(($stateProvider, $locationProvider) => {
    const states = [
      {
        name: 'home',
        url: '/',
        component: 'home'
      },
      {
        name: 'todos',
        url: '/todos',
        component: 'todos',
        resolve: {
          todos(TodosService) {
            return TodosService.getTodos();
          }
        }
      },
      {
        name: 'todo',
        url: '/todos/{todoId}',
        component: 'todo',
        resolve: {
          todo(TodosService, $transition$) {
            return TodosService.getTodo($transition$.params().todoId);
          }
        }
      }
    ];

    states.forEach(state => {
      $stateProvider.state(state);
    })
    $locationProvider.html5Mode(true);


  })
  .component('app', app);
  // .component('home', {
  //   template: '<h3>{{$ctrl.name}} component</h3><div><a ui-sref="todos">Todos</a></div>',
  //   controller() { // here goes the controller class
  //     this.name = 'Home';
  //   }
  // })
  // .component('todos', {
  //   bindings: { todos: '<' },
  //   template: '<h3>Your todos:</h3>' +
  //     '<ul>' +
  //     '  <li ng-repeat="todo in $ctrl.todos">' +
  //     '    <a ui-sref="todo({ todoId: todo.id })">' +
  //     '      {{todo.title}}' +
  //     '    </a>' +
  //     '  </li>' +
  //     '</ul>'
  // })
  // .component('todo', {
  //   bindings: { todo: '<' },
  //   template: '<h3>{{$ctrl.todo.title}}</h3>'
  // })
  // .service('TodosService', $http => {
  //   const todos = [
  //     {
  //       title: 'todo_1',
  //       id: 1
  //     },
  //     {
  //       title: 'todo_2',
  //       id: 2
  //     }
  //   ];
  //   const service = {
  //     getTodos() {
  //       return todos;
  //     },
  //     getTodo(id) {
  //       return todos[id - 1];
  //     }
  //   };

  //   return service;
  // })
