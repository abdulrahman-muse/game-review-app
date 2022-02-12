# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating games!"


g1 = Game.create(title: "NBA 2K22", genre: "Sports", image_url: "https://cdn.vox-cdn.com/thumbor/E_d9qZl1bYgro7pHL8RhkKQZp7I=/0x0:813x1024/1200x800/filters:focal(485x145:615x275)/cdn.vox-cdn.com/uploads/chorus_image/image/69580917/luka_2k22_standard.0.jpg", developer: "2K Games")
g2 = Game.create(title: "Fortnite", genre: "Battle Royale", image_url: "https://cdn1.epicgames.com/offer/fn/19BR_KeyArt_EGS_Launcher_Blade_1200x1600_1200x1600-b49da2ae039bd0adb44171318c91787b", developer: "Epic Games")
g3 = Game.create(title: "Modern Warfare", genre: "First-Person Shooter", image_url: "https://www.mobygames.com/images/covers/l/601919-call-of-duty-modern-warfare-playstation-4-front-cover.png", developer: "Infinity Ward")

puts "creating users"

user1 = User.create(username: "abdulm15", email:"abdulmuse1@gmail.com", password:"password", password_confirmation:"password")

puts "creating reviews"

r1 = Review.create(rating: 5, title: "great game!", description:"This game was so fun to play!!", game_id: g1.id, user_id: user1.id)
r2 = Review.create(rating: 1, title: "awful game!", description:"This game was horrible!!", game_id: g2.id, user_id: user1.id)
r3 = Review.create(rating: 3, title: "mid game!", description:"This game was mid.", game_id: g3.id, user_id: user1.id)
r4 = Review.create(rating: 5, title: "great game!", description:"This game was so fun to play!!", game_id: g3.id, user_id: user1.id)
r5 = Review.create(rating: 1, title: "awful game!", description:"This game was horrible!!", game_id: g1.id, user_id: user1.id)
r6 = Review.create(rating: 3, title: "mid game!", description:"This game was mid.", game_id: g2.id, user_id: user1.id)
r7 = Review.create(rating: 5, title: "great game!", description:"This game was so fun to play!!", game_id: g2.id, user_id: user1.id)
r8 = Review.create(rating: 1, title: "awful game!", description:"This game was horrible!!", game_id: g3.id, user_id: user1.id)
r9 = Review.create(rating: 3, title: "mid game!", description:"This game was mid.", game_id: g1.id, user_id: user1.id)


puts "seeding done!"