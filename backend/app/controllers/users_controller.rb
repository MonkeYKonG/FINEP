class UsersController < ApplicationController
    def sign_up
        @new_user = User.new
        if params[:action] == "signup" && params[:email] != "" && params[:firstname] != "" && params[:name] != "" && params[:pseudo] != "" && params[:passwd] != ""
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
        if params[:action] && params[:action] == "signin"
            if params[:email] != "" && params[:passwd] != ""
                @user = User.where(pseudo: params[:email], passwd: params[:passwd])
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
        if params[:action] && params[:action] == "lostpasswd"
            if params[:email] != ""
                bool = User.exists?(:email => params[:email])
                if bool
                    render :status => 201 and return
                    // envoyer un mail avec un nouveau mdp aléatoire après avoir modifier la db
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
