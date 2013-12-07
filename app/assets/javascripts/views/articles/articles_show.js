Rssreader.Views.ArticlesShow = Backbone.View.extend({

  template: JST['articles/show'],

  initialize: function(){
    this.render();
  },

  render: function(){
    // this.$el.html( this.template(this.model.toJSON({})) );
    // debugger;
    // alert("sup");
    this.$el.html( '<br><br><br><br>'+'testing show page' );
    return this;
  }

});


