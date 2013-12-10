json.array!(@sources) do |source|
  json.extract! source, :id, :url, :rss_url, :name, :description
  json.url source_url(source, format: :json)
end
