Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

# Creating session

post '/login', to: 'sessions#create'

delete 'logout', to: 'sessions#destroy'


#Notes controller 


post 'notes', to: 'notes#create'

get 'entries', to: 'notes#all_notes_current_user'


patch '/replace/:id', to: 'notes#update_note'


delete 'delete/:id', to: 'notes#destroy'




# USER ROUTES TO EDIT USER DATA

post '/signup', to: 'users#create'
get '/me', to: 'users#show'

end
