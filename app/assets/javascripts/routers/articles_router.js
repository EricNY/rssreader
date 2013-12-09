Rssreader.Routers.Articles = Backbone.Router.extend({
  routes: {
    '': 'index',
    'articles/:id': 'show'
  },

  initialize: function(){
    this.collection = new Rssreader.Collections.Articles();
    this.collection.fetch();
  },

  index: function(){
    var model = new Rssreader.Models.Article({collection: this.collection});
    model.fetch({
      success: function(model){
        var view = new Rssreader.Views.ArticlesIndex({model: model});
        $('#articles').html(view.render().el);
      }
    });
  },

  show: function(id){
    var model = new Rssreader.Models.Article({id: id});
    model.fetch({
      success: function(model){
        var view = new Rssreader.Views.ArticlesShow({model: model});
        $('#articles').html(view.render().el);
        // console.log(view);
      }
    });
  }

});
