class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :created_at, :user_id, :comment_count
end
