class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :title, presence: true
    validates :description, presence: true
    validates :rating, presence: true
end
