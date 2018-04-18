# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |n|
  name  = Faker::Name.name
  username = name
  email = "test-#{n+1}@fabric.org"
  password = "password"
  user = User.new( email: email,
                password:              password,
                password_confirmation: password)
  user.skip_confirmation!
  user.save!
end

# Create posts
users = User.order(:created_at).take(6)
5.times do |n|
  image = File.new("test/fixtures/files/birds.jpg")
  description = Faker::RickAndMorty.quote
  users.each { |user| user.posts.create!(imagefile: image, description: description) }
end 