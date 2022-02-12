class GamesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        games = Game.all
        render json: games
    end

    def show
        game = find_game
        render json: game.to_json(only: [:id, :title, :image_url, :genre, :developer], include: [:reviews])
      end

      private 

      def find_game
        Game.find(params[:id])
      end

end
