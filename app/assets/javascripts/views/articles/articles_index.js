Rssreader.Views.ArticlesIndex = Backbone.View.extend({

  template: JST['articles/index'],

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html( this.template(this.model.toJSON({})) );
    // this.$el.html( '<br><br><br><br>'+'testing index page' );
    return this;
  }

});

