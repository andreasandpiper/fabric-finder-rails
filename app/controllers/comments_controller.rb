class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy]

  def create
    comment_params
    post = Post.find(comment_params[:post_id])
    comment = post.comments.create(author_id: current_user.id, content: comment_params[:content])
    render json: comment
  end 

  def destroy 
    comment = Comment.find(params[:id])
    if current_user.id == comment.author_id
      return comment.destroy
    else 
      return head :unauthorized
    end
  end

  def get_comments
    post = Post.find(params[:id])
    current_time = Time.current
    comments = post.comments
    render json: comments, include: "*.*"
  end

  private

  def comment_params
    params.require(:data).permit(:post_id, :content)
  end 
end
