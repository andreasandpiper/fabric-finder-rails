class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :image,  presence: true
  validates :description, presence: true, length: { maximum: 1000 }
  attr_accessor :comment_count

  def comment_count
    Post.find(self.id).comments.count
  end 
end
