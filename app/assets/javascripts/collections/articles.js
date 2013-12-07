Rssreader.Collections.Articles = Backbone.Collection.extend({

  url: '/articles',

  model: Rssreader.Models.Article

});


  // urlRoot: '/articles',

  // defaults: {
  //   "name": "default name",
  //   "summary": "default summary",
  //   "url": "default url",
  //   "published_at": "default published date",
  //   "guid": "default guid"
  // }
