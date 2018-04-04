Rails.application.routes.draw do
  devise_for :users
  root 'application#home'
  resources :posts
  resources :users
  resources :profile
  resources :comments
  get '/post/:id/comments', to: 'comments#get_comments'
end
