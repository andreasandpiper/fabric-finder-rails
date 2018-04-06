class ProfileController < ApplicationController
  def default_serializer_options
    { each_serializer: UserSerializer }
  end

  def index
    if user_signed_in? 
      render json: current_user 
    else 
      return head :unauthorized
    end 
  end

  def show
    user = User.find(params[:id])
    render json: user, include: "*.*"
  end 

end
