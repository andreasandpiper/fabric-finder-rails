require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  
  def setup
    @post = posts(:one)
  end 

  # test "should redirect create if not logged in" do 
  #   assert_no_difference 'Post.count' do 
  #     post posts_path, params: { post: { image: "image url", description: "description!"}}
  #   end 

  #   assert_redirected_to user_session_url
  # end 
end
