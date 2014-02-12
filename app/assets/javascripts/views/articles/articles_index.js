Rssreader.Views.ArticlesIndex = Backbone.View.extend({

  template: JST['articles/index'],

  template2: JST['sources/index'],

  events:{
    'submit #new_feed': 'createFeed',
    'click .article-link': 'showInfo'
  },

  initialize: function(a,b) {
    // collection.on('change', this.render, this);
    // model.on('change',this.render,this);
    // this.on('change', this.render, this);
    this.source_obj = a.source_obj;
  },

  render: function(){
    this.$el.html(this.template({sources:this.source_obj.toJSON(),articles: this.model.toJSON()}));
    return this;
  },

  createFeed: function(e){
    e.preventDefault();
    var feed_url = $('#new_feed_name').val();
    $.post('/sources', {url: feed_url}, function(data){
      $.post('/articles/force_update', {feed_url: feed_url, source_id: data.id, source: data.name}, function(){
        // console.log();
      location.reload();
      }, 'json');
      // this.collection.render;
      // console.log(data.id);
      // location.reload();
    }, 'json');
    setTimeout("location.reload();", 1000);
  },

  showInfo: function(e){
    e.preventDefault();
    if($(e.currentTarget).hasClass("opened")) {
      $(e.currentTarget).removeClass("opened");
      $(e.currentTarget).closest("li").find(".content").html("");
    } else {
      var id = $(e.currentTarget).data('articleId');
      $(e.currentTarget).addClass("opened");

      var model = new Rssreader.Models.Article({id: id});
      model.fetch({
        success: function(model){
          var view = new Rssreader.Views.ArticlesShow({model: model});
          $(e.target).closest("li").find(".content").html(view.render().el);
          // console.log(view);
        }
      });
    }

  }

});

