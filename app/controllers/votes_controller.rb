class VotesController < ApplicationController
  before_action :authenticate_user!

  def upvote
    vote = Vote.find_by(comment_id: params[:id], user_id: current_user.id)
    comment = Comment.find(params[:id])
    if !vote
      comment.votes.create(user_id: current_user.id, vote_type: true)
    else 
      destroy vote 
    end
    render json: comment.vote_count
  end 

  def downvote
    vote = Vote.find_by(comment_id: params[:id], user_id: current_user.id)
    comment = Comment.find(params[:id])
    if !vote
      comment.votes.create(user_id: current_user.id, vote_type: false)
    else 
      destroy vote 
    end 
    render json: comment.vote_count
  end

  private

  def destroy(vote)
    if current_user.id == vote.user_id
      vote.destroy
    end 
  end

end
