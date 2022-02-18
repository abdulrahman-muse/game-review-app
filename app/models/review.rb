class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :title, presence: true
    validates :description, presence: true, length: { in: 10..200 }
    validates :rating, presence: true, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 0}
end
