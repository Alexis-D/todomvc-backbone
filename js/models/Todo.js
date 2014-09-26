define(['backbone'], function (Backbone) {
  return Backbone.Model.extend({
    defaults: {
      completed: false
    },

    // FIXME(adaboville)
    sync: function () {
      return false;
    }
  });
});
