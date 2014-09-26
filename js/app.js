define(['underscore', 'collections/Todos', 'views/NewTodoView', 'views/ToggleView', 'views/MainView', 'views/FooterView'], function (_, Todos, NewTodoView, ToggleView, MainView, FooterView) {
  var app = {
    todos: new Todos
  };

  app.init = function () {
    _.each([NewTodoView, ToggleView, MainView, FooterView], function (View) {
      new View({
        collection: app.todos
      });
    });
  };

  return app;
});
