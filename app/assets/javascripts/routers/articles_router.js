Rssreader.Routers.Articles = Backbone.Router.extend({
  routes: {
    '': 'index',
    'articles/:id': 'show'
  },

  index: function(){
    var model = new Rssreader.Models.Article({id: 4});
    model.fetch({
      success: function(model){
        var view = new Rssreader.Views.ArticlesIndex({model: model});
        $('#articles').html(view.render().el);
      }
    });
  },

  show: function(id){
    // alert('show?'+id);
    // debugger;
    var model = new Rssreader.Models.Article({id: id});

    model.fetch({
      success: function(model){
        var view = new Rssreader.Views.ArticlesShow({model: model});
        // console.log(view.render().el);
        $('#article').html(view.render().el);
      }
    });
  }

});
