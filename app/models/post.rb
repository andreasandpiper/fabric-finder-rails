class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_attached_file :imagefile, styles: {
    thumb: '100x100>',
    medium: '300x300>',
    large: '500x500#'
  }, :default_style => :medium

  default_scope -> { order(created_at: :desc) }
  validates :description, presence: true, length: { maximum: 1000 } 
  validates_attachment_content_type :imagefile, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  attr_accessor :comment_count

  def comment_count
    Post.find(self.id).comments.count
  end 
end
