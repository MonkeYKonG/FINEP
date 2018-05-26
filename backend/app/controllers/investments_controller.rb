class InvestmentsController < ApplicationController
    def invest
        @new_investment = Investment.create authorid: params[:author_id], destid: params[:dest_id], value: params[:value]
        render json: @new_investment
    end

    def get_investments
        render json: Investment.all
    end
end
