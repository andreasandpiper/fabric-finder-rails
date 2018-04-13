class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_attached_file :imagefile, styles: {
    thumb: '100x100>',
    medium: '300x300>'
  }

  default_scope -> { order(created_at: :desc) }
  validates :description, presence: true, length: { maximum: 1000 } 
  validates_attachment_content_type :imagefile, :content_type => /\Aimage\/.*\Z/
  attr_accessor :comment_count

  def comment_count
    Post.find(self.id).comments.count
  end 
end
