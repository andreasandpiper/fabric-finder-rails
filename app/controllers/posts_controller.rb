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
      return post.destroy
    else 
      return head :unauthorized
    end
  end 

  private 

  def post_params 
    params.permit(:description, :imagefile)
  end

end
