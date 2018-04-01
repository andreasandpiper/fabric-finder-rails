class Post < ApplicationRecord
  validates :image,  presence: true
  validates :description, presence: true, length: { maximum: 1000 }
end
