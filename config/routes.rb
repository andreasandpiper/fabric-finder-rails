Rails.application.routes.draw do
  devise_for :users  
  root 'application#home'
  resources :posts
  resources :users
  resources :profile
  resources :comments
  get '/post/:id/comments', to: 'comments#get_comments'
  post '/comments/:id/upvote', to: 'votes#upvote'
  post '/comments/:id/downvote', to: 'votes#downvote'
end
