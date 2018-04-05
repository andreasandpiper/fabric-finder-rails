class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :content, :created_at, :author_id, :vote_count
end
