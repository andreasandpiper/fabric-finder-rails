class PostSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :description, :image, :user_id
  has_many :comments
end
