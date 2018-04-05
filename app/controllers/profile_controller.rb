class ProfileController < ApplicationController

  def index
    if user_signed_in? 
      render json: current_user 
    else 
      return head :unauthorized
    end 
  end

  def show
    user = User.find(params[:id])
    posts = user.posts
    posts = posts.map do  |post| 
      post.comment_count
      post
    end
    render json: { user: user, posts: posts}
  end 

end
