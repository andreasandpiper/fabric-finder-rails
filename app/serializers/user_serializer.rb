class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :gravatar

  has_many :posts
end
