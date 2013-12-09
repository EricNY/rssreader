Rssreader.Views.ArticlesIndex = Backbone.View.extend({

  template: JST['articles/index'],

  events:{
    'submit #new_feed': 'createFeed'
  },

  render: function(){
    this.$el.html(this.template({articles: this.model.toJSON()}));
    console.log(this.model.toJSON());
    return this;
  },

  createFeed: function(e){
    e.preventDefault();
    var feed_url = $('#new_feed_name').val();
    $.post('/articles/force_update', {feed_url: feed_url}, function(){
      alert('testing url feeder');
    });
  }

});

