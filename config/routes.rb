Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

# Creating session

post '/login', to: 'sessions#create'

delete 'logout', to: 'sessions#destroy'




# USER ROUTES TO EDIT USER DATA

post '/signup', to: 'users#create'
get '/me', to: 'users#show'

end
