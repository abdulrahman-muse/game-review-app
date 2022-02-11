class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :description, :user_id, :game_id
end
