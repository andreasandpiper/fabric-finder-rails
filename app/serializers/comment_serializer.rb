class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :author_id
end
