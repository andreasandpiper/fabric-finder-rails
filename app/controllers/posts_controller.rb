class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:destroy, :create]

  def index
    posts = Post.all
    paginate json: posts, per_page: 10  
  end

  def create 
    post = current_user.posts.create(post_params)
    render json: post
  end 

  def show 
    post = Post.find(params[:id])
    render json: post
  end 

  def destroy 
    post = Post.find(params[:id])
    if current_user.id == post.user_id
      post.imagefile.destroy
      return post.destroy
    else 
      return head :unauthorized
    end
  end 

  def topTen
    #current last 10, will change to sort by number of comments
    posts = Post.first(5)
    render json: posts
  end 

  private 

  def post_params 
    params.permit(:description, :imagefile)
  end

end
