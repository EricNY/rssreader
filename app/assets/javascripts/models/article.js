Rssreader.Models.Article = Backbone.Model.extend({
  urlRoot: '/articles',

  defaults: {
    "name": "default name",
    "summary": "default summary",
    "url": "default url",
    "published_at": "default published date",
    "guid": "default guid",
    "feed_url": "default feed url",
    "source_id": "default source id",
    "source": "default source"
  }
});
