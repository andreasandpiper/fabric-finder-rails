class Comment < ApplicationRecord
  belongs_to :post
  has_many :votes, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :content, presence: true, length: { maximum: 255 }

  def vote_count
    upvote = Vote.where(:comment_id => self.id, :vote_type=> true).count
    downvote = Vote.where(:comment_id => self.id, :vote_type=> false).count
    return upvote - downvote
  end 
end
