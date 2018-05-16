require 'rails_helper'


RSpec.describe User, type: :model do
  before do 
    @user = User.new({:username => 'test1', :email => 'test1@test1.com', :password => "password"})
  end

end
