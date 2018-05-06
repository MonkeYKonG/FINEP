class ContractsController < ApplicationController
    def new_contract
        @new_contract = Contract.create title: params[:title], body: params[:body]
        render json: @new_contract
    end

    def sign_contract

    end

    def get_contracts
        render json: Contract.all
    end
end
