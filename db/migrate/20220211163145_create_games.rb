class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :image_url
      t.string :developer

      t.timestamps
    end
  end
end
