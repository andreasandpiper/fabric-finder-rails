class VoteSerializer < ActiveModel::Serializer
  attributes :id, :comment_id, :user_id, :vote_type
  belongs_to :comment
end
