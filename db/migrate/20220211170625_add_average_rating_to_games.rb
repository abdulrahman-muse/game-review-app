class AddAverageRatingToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :average_rating, :integer
  end
end
