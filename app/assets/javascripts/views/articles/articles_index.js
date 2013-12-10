Rssreader.Views.ArticlesIndex = Backbone.View.extend({

  template: JST['articles/index'],

  template2: JST['sources/index'],

  events:{
    'submit #new_feed': 'createFeed'
  },

  initialize: function(a,b) {
    this.source_obj = a.source_obj;
  },

  render: function(){
    this.$el.html(this.template({sources:this.source_obj.toJSON(),articles: this.model.toJSON()}));
    // this.$el.html(this.template2({sources: this.model2}));
    console.log(this.model);
    console.log(this.source_obj);
    return this;
  },

  createFeed: function(e){
    e.preventDefault();
    var feed_url = $('#new_feed_name').val();
    $.post('/articles/force_update', {feed_url: feed_url}, function(){
      // alert('testing url feeder');
    });


    $.post('/sources', {url: feed_url}, function(){

    });
  }

});

