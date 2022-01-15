class NotesController < ApplicationController

    def create 
        new_note = current_user.notes.create(notes_params)
        if new_note 
            render json: new_note, status: :created
        else 
            render json:{ errors: recipe.errors.messages}, status: :unprocessable_entity
         end
    end




    private 

    def notes_params 
        params.permit(:title, :date, :diary)
    end
end
