class Comment < ApplicationRecord
  belongs_to :post
  has_many :votes, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :content, presence: true, length: { maximum: 255 }
end
