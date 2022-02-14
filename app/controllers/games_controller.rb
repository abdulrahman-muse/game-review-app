class GamesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        games = Game.all
        render json: games
    end

    def show
        game = find_game
        render json: game
    end

      private 

      def find_game
        Game.find(params[:id])
      end

end
