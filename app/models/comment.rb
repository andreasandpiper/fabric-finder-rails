class Comment < ApplicationRecord
  belongs_to :post
  default_scope -> { order(created_at: :desc) }
  validates :content, presence: true, length: { maximum: 255 }
end
