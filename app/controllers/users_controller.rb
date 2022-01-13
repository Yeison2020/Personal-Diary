class UsersController < ApplicationController


    def index 
        all_user = User.all 
        render json: all_user,each_serializer:  UserSerializer 
    end


    def create 
        user = User.create(user_params)
        if user.valid? 
            session[:user_id] = user.:id 
            render json: user, status: :created 
        else   
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end

    end


    def show 
        if current_user 
            render json: current_user, statu: :ok 

        else 
            render json: 'Not authenticated', status: :unauthorized
        end


    end









    private 


    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
