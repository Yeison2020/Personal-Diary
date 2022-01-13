class SessionsController < ApplicationController


    def create 
        user  = User.find_by_username(params[:username])

        if user&autheticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok 
        else  
            render json: {errors: ['Invalid user or password']}, status: :unauthorized
        end

    end




    def destroy
        if current_user 
            session.delete :user_id 
            head :no_content
        else  
            render json: {errors: ['Invalid user or password']}, status: :unauthorized
        end


    end
end
