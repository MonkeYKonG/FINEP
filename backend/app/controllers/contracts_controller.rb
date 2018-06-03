class ContractsController < ApplicationController
    def new_contract
        if params[:Action] == "newcontrat"
            if params[:id] && params[:title] && params[:body] && params[:id] != "" && params[:title] != "" && params[:body] != ""
                if User.exists?(:id => params[:id])
                    @new_contract = Contract.new
                    @new_contract.authorid = params[:id]
                    @new_contract.title = params[:title]
                    @new_contract.body = params[:body]
                    if @new_contract.save
                        render :status => 201, :json => @new_contract and return
                    else
                        render :status => 500
                    end
                else
                    render :status => 400 and return
                end
            else
                render :status => 400 and return
            end
        else
            render :status => 404 and return
        end
    end

    def sign_contract
        if params[:Action] == "signcontrat"
            if params[:id] && params[:ctrnum] && params[:id] != "" && params[:ctrnum] != ""
                if User.exists?(:id => params[:id]) && Contract.exists?(:id => params[:ctrnum])
                    render :status => 201 and return
                else
                    render :status => 400 and return
                end
            else
                render :status => 400 and return
            end
        else
            render :status => 404 and return
        end
    end

    def get_contracts
        render json: Contract.all
    end
end
