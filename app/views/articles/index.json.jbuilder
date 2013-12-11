json.array!(@articles) do |article|
  json.extract! article, :id, :name, :summary, :url, :published_at, :guid, :created_at, :updated_at, :source_id, :source
  json.url article_url(article, format: :json)
end
