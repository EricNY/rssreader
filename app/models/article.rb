class Article < ActiveRecord::Base

  def self.update_from_feed(feed_url, source_id, source)
    feed = Feedzirra::Feed.fetch_and_parse(feed_url)
    # debugger
    add_entries(feed.entries, source_id, source)
  end

  def self.update_from_feed_continuously(feed_url, delay_interval = 15.minutes, source_id, source)
    feed = Feedzirra::Feed.fetch_and_parse(feed_url)
    add_entries(feed.entries, source_id, source)
    loop do
      sleep delay_interval
      feed = Feedzirra::Feed.update(feed)
      add_entries(feed.new_entries, source_id, source) if feed.updated?
    end
  end

  private

  def self.add_entries(entries, source_id, source)
    entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
          :name         => entry.title,
          :summary      => entry.summary,
          :url          => entry.url,
          :published_at => entry.published,
          :guid         => entry.id,
          :feed_url     => entry.url,
          :source_id    => source_id,
          :source       => source
        )
      end
    end
  end

end
