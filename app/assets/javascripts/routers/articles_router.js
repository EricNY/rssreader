Rssreader.Routers.Articles = Backbone.Router.extend({
  routes: {
    '': 'index',
    'articles/:id': 'show'
  },

  initialize: function(){
    this.collection = new Rssreader.Collections.Articles();
    this.collection.fetch();

    this.collection2 = new Rssreader.Collections.Sources();
    this.collection2.fetch();
  },

  index: function(){
    var article = new Rssreader.Models.Article();
    // console.log('starting fetch of articles index collection');
    article.fetch({
      success: function(article_obj){
        // console.log(view);

        var source = new Rssreader.Models.Source();
        source.fetch({
          success: function(source_obj){
            var source_view = new Rssreader.Views.SourcesIndex({model: source_obj});
            $('#sources').html(source_view.render().el);
            // console.log(view);
            var article_view = new Rssreader.Views.ArticlesIndex({model: article_obj, source_obj: source_obj});
            $('#articles').append(article_view.render().el);
          }
        });

      }
    });

    // console.log(model2)

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
