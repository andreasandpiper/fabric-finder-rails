require 'test_helper'

class CommentsControllerTest < ActionDispatch::IntegrationTest
    
  def setup 
    @post = posts(:one)
    @comment = @post.comments.build(content: "hello")
  end

  test "should redirect create if not logged in" do 
    assert_no_difference 'Comment.count' do 
      post comments_path, params: { comment: {  content: "description!"}}
    end 
  end 

end
