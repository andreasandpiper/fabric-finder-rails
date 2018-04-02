class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:destroy, :create]

  def index
    @posts = Post.all
    render json: @posts
  end

  def create 
    post_data = JSON.parse params[:data]
    post = current_user.posts.create(post_data)
    render json: post
  end 

  def show 
    post = Post.find(params[:id])
    data = { :signed_in => user_signed_in?, :post => post }
    render json: data
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
