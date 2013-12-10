Rssreader.Routers.Sources = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function(){
    this.collection = new Rssreader.Collections.Sources();
    this.collection.fetch();
  },

  index: function(){
    var model = new Rssreader.Models.Source({collection: this.collection});
    model.fetch({
      success: function(model){
        var view = new Rssreader.Views.SourcesIndex({model: model});
        // $('#sources').html(view.render().el);
      }
    });
  }

});
