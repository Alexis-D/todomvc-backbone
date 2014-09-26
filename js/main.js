requirejs.config({
  baseUrl: 'js',

  paths: {
    backbone: '../lib/backbone/backbone',
    jquery: '../lib/jquery/dist/jquery.min',
    underscore: '../lib/underscore/underscore-min',
    swig: '../lib/swig/index'
  },
});

requirejs(['jquery', 'app'], function ($, app) {
  $(function () {
    // only to be able to debugs from firebug, not to be used elsewhere
    window.app = app;
    app.init();
  });
});
/*
// * Routing
*/
