class Post < ApplicationRecord
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :image,  presence: true
  validates :description, presence: true, length: { maximum: 1000 }
end
