class ConfirmationsController < Devise::ConfirmationsController

  def show

  end 

  private
  def after_confirmation_path_for(resource_name, resource)
    sign_in(resource)
  end
end
