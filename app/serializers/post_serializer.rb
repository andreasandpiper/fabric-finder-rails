class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :created_at, :comment_count,:user_id, :time

  has_one :user 

  def time 
    Time.current 
  end 
end
