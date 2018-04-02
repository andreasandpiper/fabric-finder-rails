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

  def destroy 
    post = Post.find(params[:id])
    return post.destroy
  end 

  private 

  def post_params 
    params.require(post_data).permit(:image, :description)
  end
end
