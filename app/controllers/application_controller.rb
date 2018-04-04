class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def home 
    redirect_to '/app'
  end 

  protected
    def after_sign_in_path_for(resource)
      return '/app'
    end

    def after_sign_out_path_for(resource)
      return '/app'
    end

end
