Rssreader.Views.SourcesIndex = Backbone.View.extend({

  template: JST['sources/index'],

  render: function(){
    this.$el.html( this.template({sources: this.model.toJSON()}) );
    // console.log(this.model.toJSON());
    return this;
  }

});
