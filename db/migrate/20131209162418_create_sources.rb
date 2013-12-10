class CreateSources < ActiveRecord::Migration
  def change
    create_table :sources do |t|
      t.string :url
      t.string :rss_url
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
