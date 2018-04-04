class VotesController < ApplicationController

  def upvote
    comment = Comment.find(params[:id])

    render json: comment
  end 

  def downvote
  end

end
