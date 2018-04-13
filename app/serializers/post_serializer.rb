class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :comment_count,:user_id, :time, :imagefile

  has_one :user

  def time 
    Time.current 
  end 
end
