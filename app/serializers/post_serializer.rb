class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :created_at, :user_id, :comment_count, :time

  has_one :user 

  def time 
    Time.current 
  end 
end
