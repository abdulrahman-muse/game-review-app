class RemoveAverageRatingFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :average_rating, :integer
  end
end
