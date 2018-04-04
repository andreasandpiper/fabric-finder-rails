class VotesController < ApplicationController

  def upvote
    comment = Comment.find(params[:id])
    comment.votes.create(comment_id: params[:id], user_id: current_user, vote_type: true)
    comment = Comment.find(params[:id])
    render json: comment
  end 

  def downvote
  end

end
