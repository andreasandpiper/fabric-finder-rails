class VotesController < ApplicationController

  def upvote
    vote = Vote.find_by(comment_id: params[:id], user_id: current_user.id)
    comment = Comment.find(params[:id])
    if !vote
      comment.votes.create(comment_id: params[:id], user_id: current_user, vote_type: true)
      comment = Comment.find(params[:id])
    end 
    render json: comment
  end 

  def downvote
    comment = Comment.find(params[:id])
    comment.votes.create(comment_id: params[:id], user_id: current_user, vote_type: false)
    comment = Comment.find(params[:id])
    render json: comment
  end

end
