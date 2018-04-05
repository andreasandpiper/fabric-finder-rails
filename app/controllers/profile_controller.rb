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
    render json: { user: user, posts: posts, time: Time.current}
  end 

end
