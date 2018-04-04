require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  
  def setup 
    @post = posts(:one)
    @comment = @post.comments.build(content: "hello")
  end

  test "comment should be valid" do
    assert @comment.valid?
  end

  test "comment should have a content" do 
    @comment.content = ""
    assert_not @comment.valid?
  end 

  test "comment should be no more than 255 characters" do 
    @comment.content = "a" * 256
    assert_not @comment.valid?
  end 
end
