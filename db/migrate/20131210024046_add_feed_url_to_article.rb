class AddFeedUrlToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :feed_url, :string
  end
end
