class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :image_url, :developer
end
