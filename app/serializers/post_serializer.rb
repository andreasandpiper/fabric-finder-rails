class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :created_at, :comment_count, :time

  has_one :user 

  def time 
    Time.current 
  end 
end
