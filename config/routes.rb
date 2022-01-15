Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"




# USER ROUTES TO EDIT USER DATA

post '/signup', to: 'users#create'

end
