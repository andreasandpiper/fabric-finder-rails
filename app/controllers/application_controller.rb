class ApplicationController < ActionController::Base
  include Rails::Pagination
  # protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

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

    def configure_permitted_parameters
      added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
      devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
      devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    end 

end
