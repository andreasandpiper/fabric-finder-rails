class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :vote_count, :author_id

  has_one :post

  def time 
    Time.current 
  end 

end
