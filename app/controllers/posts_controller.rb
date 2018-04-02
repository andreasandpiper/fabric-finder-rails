class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts
  end

  def create 
    post_data = JSON.parse params[:data]
    post = Post.create(post_data)
    render json: post
  end 

  def show 
    post = Post.find(params[:id])
    render json: post
  end 
end
