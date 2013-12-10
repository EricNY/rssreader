window.Rssreader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new Rssreader.Routers.Articles;
    // new Rssreader.Routers.Sources;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Rssreader.initialize();
});
