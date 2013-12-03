json.array!(@articles) do |article|
  json.extract! article, :id, :name, :summary, :url, :published_at, :guid
  json.url article_url(article, format: :json)
end
