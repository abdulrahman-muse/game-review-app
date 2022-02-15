class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

private

def review_params
    params.permit(:title, :description, :rating, :game_id, :user_id)
end


end
