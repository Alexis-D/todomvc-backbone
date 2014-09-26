define(['views/NewTodoView', 'constants'], function (NewTodoView, constants) {
  return Backbone.View.extend({
    el: '#header',

    events: {
      'keypress #new-todo': 'onKeyPress'
    },

    onKeyPress: function (e) {
      if (e.which == constants.ENTER_KEY && this.$('#new-todo').val().trim()) {
        this.collection.create({
          title: this.$('#new-todo').val().trim()
        });

        this.$('#new-todo').val(null);
      }
    }
  });
});
