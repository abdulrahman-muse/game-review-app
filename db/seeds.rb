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
g2 = Game.create(title: "Call of Duty: Modern Warfare", genre: "First-Person Shooter", image_url: "https://static.wikia.nocookie.net/cod_esports_gamepedia_en/images/b/be/Modern_Warfare_Game_Cover.jpg/revision/latest?cb=20200705191824", developer: "Infinity Ward")
