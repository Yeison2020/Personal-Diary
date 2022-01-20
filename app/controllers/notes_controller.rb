class NotesController < ApplicationController

    def create 
        new_note = current_user.notes.create(notes_params)
        if new_note 
            render json: new_note, status: :created
        else 
            render json:{ errors:  new_note.errors.messages}, status: :unprocessable_entity
         end
    end


    def all_notes_current_user 
        all_notes = current_user.notes 
        if all_notes
            render json: all_notes, status: :ok
        else  
            render json: {errors: all_notes.errors.messages}, status: :unprocessable_entity
     end
    end



    def update_note 
        updated_note = current_user.notes.find_by(id: params[:id])
        if updated_note
            updated_note.update(notes_params)
            render json: updated_note
        else 
            render json: {error: 'Note not found'}, status: :not_found
        end
    end




    private 

    def notes_params 
        params.permit(:title, :date, :diary)
     
    end
end
