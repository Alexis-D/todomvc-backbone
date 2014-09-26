define(['backbone', 'views/TodoView'], function (Backbone, TodoView) {
  return Backbone.View.extend({
    el: '#todo-list',

    initialize: function () {
      this.listenTo(this.collection, 'add', this.addNewTodo);
    },

    addNewTodo: function (todo) {
      this.$el.append(new TodoView({model: todo}).render().el);
    }
  });
});
