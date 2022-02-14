class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :description, :user_id, :game_id
  belongs_to :user
  belongs_to :game
end
