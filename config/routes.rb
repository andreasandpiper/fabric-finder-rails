Rails.application.routes.draw do
  devise_for :users
  root 'posts#index'
  resources :posts
  resources :users
  resources :profile
  resources :comments
  get '/post/:id/comments', to: 'comments#get_comments'
end
