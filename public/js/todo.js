angular.module('todoApp', [])
  .controller('TodoListController', function() {
    const todoList = this;
    todoList.todos = [
      {text: 'learn AngularJS', done: true,},
      {text: 'build an Angular JS app', done: false},
    ];

    todoList.addTodo = () => {
      todoList.todos.push({text: todoList.todoText, done: false});
      todoList.todoText = '';
    };

    todoList.remaining = () => {
      let count = 0;
      console.log(todoList.todos);
      angular.forEach(todoList.todos, (todo) => {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = () => {
      const oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, (todo) => {
        if (!todo.done) {
          todoList.todos.push(todo);
        }
      });
    };
  });
