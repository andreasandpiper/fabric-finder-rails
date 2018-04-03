# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

99.times do |n|
  name  = Faker::Name.name
  email = "example-#{n+1}@test.org"
  password = "password"
  User.create!( email: email,
                password:              password,
                password_confirmation: password)
end

images = ["https://d2d00szk9na1qq.cloudfront.net/Product/86c0f0b0-de8d-43bd-a893-b91454f9e7bc/Images/Large_0421216.jpg","https://images-na.ssl-images-amazon.com/images/I/91PMXeJneRL._SY355_.jpg","https://media.rainpos.com/674/image_20170124221310.jpeg"]

# Create posts
users = User.order(:created_at).take(6)
10.times do |n|
  image = images[rand(0..2)]
  description = Faker::RickAndMorty.quote
  users.each { |user| user.posts.create!(image: image, description: description) }
end 