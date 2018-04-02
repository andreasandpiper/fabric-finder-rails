class ProfileController < ApplicationController

  def index
    if user_signed_in? 
      render json: current_user 
    else 
      return head :unauthorized
    end 
  end

end
