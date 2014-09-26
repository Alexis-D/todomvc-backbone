define(['backbone'], function (Backbone) {
  return Backbone.View.extend({
    el: '#toggle-all',

    events: {
      'change': 'toggleAll'
    },

    initialize: function () {
      this.listenTo(this.collection, 'all', this.render);
      this.render();
    },

    render: function () {
      if (this.collection.isEmpty()) {
        this.$el.hide();
      } else {
        this.$el.show();
        var checked = this.collection.every(function (todo) {
          return todo.get('completed');
        });
        this.$el.prop('checked', checked);
      }
    },

    toggleAll: function () {
      var completed = this.$el.prop('checked');
      this.collection.each(function (todo) {
        todo.set('completed', completed);
      });
    }
  });
});
