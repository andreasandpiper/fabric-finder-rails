class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :gravatar
end
