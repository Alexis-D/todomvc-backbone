define(['backbone', 'models/Todo'], function (Backbone, Todo) {
  return Backbone.Collection.extend({
    model: Todo
  });
});
