class UsersController < ApplicationController
    def sign_up
        @new_user = User.create email: params[:email], firstname: params[:firstname], name: params[:name], pseudo: params[:pseudo], capital: 0, passwd: params[:passwd]
        render json: @new_user
    end

    def sign_in
        @user = User.where(pseudo: params[:pseudo], passwd: params[:passwd])
        render json: @user
    end

    def forgot_passwd

    end

    def get_profiles
        render json: User.all
    end

    def update_profile

    end
end
