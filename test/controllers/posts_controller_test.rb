require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  
  def setup
    @post = posts(:one)
  end 

  def json_response 
    ActiveSupport::JSON.decode @response.body
  end

  test "should redirect create if not logged in" do 
    assert_no_difference 'Post.count' do 
      post posts_path, params: { post: { image: "image url", description: "description!"}}
    end 
  end 

  test "should redirect destroy if not logged in" do 
    assert_no_difference 'Post.count' do 
      delete  post_path(@post)
    end 
  end

end
