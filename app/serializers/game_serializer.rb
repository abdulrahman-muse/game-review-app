class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image_url, :developer
  has_many :reviews
end
