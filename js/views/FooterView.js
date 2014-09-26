this.define(['backbone', 'swig'], function (Backbone, swig) {
  return Backbone.View.extend({
    el: '#footer',

    events: {
      'click #clear-completed': 'deleteCompleted'
    },

    template: swig.compile($('#footer-tpl').html()),

    initialize: function () {
      this.render();
      this.listenTo(this.collection, 'all', this.render);
    },

    render: function () {
      var completed = this.collection.filter(function (todo) {
        return todo.get('completed');
      }).length;
      var remaining = this.collection.filter(function (todo) {
        return !todo.get('completed');
      }).length;

      if (this.collection.isEmpty()) {
        this.$el.hide();
      } else {
        this.$el.show();
      }

      this.$el.html(this.template({
        completed: completed,
        remaining: remaining
      }));
      return this;
    },

    deleteCompleted: function () {
      this.collection.chain().filter(function (todo) {
        return todo.get('completed');
      }).invoke('destroy').value();
    }
  });
})
