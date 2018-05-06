class UsersController < ApplicationController
    def sign_up
        @new_user = User.new
        if params[:Action] == "signup" && params[:email] != "" && params[:firstname] != "" && params[:name] != "" && params[:pseudo] != "" && params[:passwd] != ""
            @new_user.email = params[:email]
            @new_user.firstname = params[:firstname]
            @new_user.name = params[:name]
            @new_user.pseudo = params[:pseudo]
            @new_user.capital = 0
            @new_user.passwd = params[:passwd]
            if !User.exists?(:pseudo => @new_user.pseudo) && !User.exists?(:email => @new_user.email)
                if @new_user.save
                    render :status => 201 and return
                else
                    render :status => 500 and return
                end
            else
                render :status => 403 and return
            end
        else
            render :status => 404 and return
        end
        render json: @new_user
    end

    def sign_in
        if params[:Action] == "signin"
            if params[:email] != "" && params[:passwd] != ""
                @user = User.where(email: params[:email], passwd: params[:passwd])
                if @user && @user.size == 1
                    render :status => 201 and return
                elsif @user && @user.size == 0
                    render :status => 400 and return
                else
                    render :status => 500 and return
                end
            else
                render :status => 400 and return
            end
            render json: @user
        else
            render :status => 404 and return
        end
    end

    def forgot_passwd
        if params[:Action] == "lostpasswd"
            if params[:email] != ""
                bool = User.exists?(:email => params[:email])
                if bool
                    user = User.find_by_email(params[:email])
                    user.send_new_password if user
                    render :status => 201 and return
                elsif !bool
                    render :status => 400 and return
                else
                    render :status => 500 and return
                end
            else
                render :status => 400
            end
        else
            render :status => 404 and return
        end
    end

    def get_profiles
        render json: User.all
    end

    def update_profile

    end
end
