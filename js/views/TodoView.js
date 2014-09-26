define(['backbone', 'swig', 'constants'], function (Backbone, swig, constants) {
  return Backbone.View.extend({
    tagName: 'li',

    events: {
      'change .toggle': 'updateCompletion',
      'click .destroy': 'removeTodo',
      'dblclick label': 'editTodo',
      'keypress .edit': 'onKeyPress',
      'keydown .edit': 'onKeyDown',
      'blur .edit': 'cancelEdit',
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    template: swig.compile($('#todo-tpl').html()),

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    updateCompletion: function () {
      this.model.set('completed', this.$('.toggle').prop('checked'));
    },

    removeTodo: function () {
      this.model.destroy();
    },

    editTodo: function () {
      this.$el.addClass('editing');
      this.$('.edit').focus();
    },

    onKeyPress: function (e) {
      if (e.which == constants.ENTER_KEY) {
        this.model.set('title', this.$('.edit').val());
        this.cancelEdit();
      }
    },

    onKeyDown: function (e) {
      if (e.which == constants.ESCAPE_KEY) {
        this.cancelEdit();
      }
    },

    cancelEdit: function (e) {
      this.$el.removeClass('editing');
    }
  });
});
