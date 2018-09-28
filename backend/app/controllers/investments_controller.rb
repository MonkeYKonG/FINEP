class InvestmentsController < ApplicationController
    def invest
        @new_investment = Investment.create authorid: params[:author_id], destid: params[:dest_id], value: params[:value]
        render json: @new_investment
        if params[:Action] == "signcontrat"
            if params[:id] && params[:id] != "" && params[:targetid] && params[:targetid] != "" && params[:invest] && params[:invest] != ""
                u = User.exists?(:id => params[:id])
                t = User.exists?(:id => params[:targetid])
                if u && t
                    target = User.find(:params[:targetid])
                    user = User.find(:params[:id])
                    /* Attention !!! Je n'ai pas encore ajouter la colone open à la table user*/
                    if target.open && user.capital >= Integer(params[:invest])
                        render :status => 201 and return
                    else
                        render :status => 400 and return
                    end
                else
                    render :status => 400 and return
                end
            else
                render :status => 400 and return
            end
        else
          render :status => 404
        end
    end

    def get_investments
        render json: Investment.all
    end
end
