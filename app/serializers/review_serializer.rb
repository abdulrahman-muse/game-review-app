class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :title, :description, :reviewer, :game
  belongs_to :user
  belongs_to :game

  def reviewer
    User.find_by_id(self.object.user_id).username
  end

  def game
    Game.find_by_id(self.object.game_id).title
  end
  
end