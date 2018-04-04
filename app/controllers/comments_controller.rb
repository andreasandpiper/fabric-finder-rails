class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    comment_params
    post = Post.find(comment_params[:post_id])
    comment = post.comments.create(author_id: current_user.id, content: comment_params[:content])
    render json: comment
  end 

  private

  def comment_params
    params.require(:data).permit(:post_id, :content)
  end 
end
