window.Rssreader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Rssreader.Routers.Articles;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Rssreader.initialize();
});
