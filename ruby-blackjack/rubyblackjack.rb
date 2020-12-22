

#Create a Player Class
class Player
    attr_accessor :name, :bankroll, :hand, :total
    def initialize(name)
        @name = name
        @bankroll = 100
        @hand = []
        @total = 0
    end
    def sum(hand)
        @total = hand[0].value + hand[1].value
    end 
end

#Create a Dealer Class
class TheHouse
    attr_accessor :name, :bankroll, :hand, :total
    def initialize(name)
        @name = name
        @bankroll = 10000
        @hand = []
        @total= 0
    end
    def sum(hand)
        @total = hand[0].value + hand[1].value
    end 
end

#Create a Card Class
class Card
    attr_reader :value
    def initialize(value)
        @value = value
    end
end

#Put Cards into a Deck
#empty deck array
deck = []

for i in 1..4
    for i in Array(2..11) + [10,10,10] 
        deck.push(Card.new(i))      
    end
end

#Shuffle the Deck
deck.shuffle!

quit = false


#User Interface and Logic
puts "+++++++++++++++++++++++++++++"
puts "Welcome to Ruby Blackjack!"
puts "+++++++++++++++++++++++++++++"

puts "Player, type your name here: "
name = gets.chomp
player = Player.new(name)
dealer = TheHouse.new("The House")

#Game Logic - Conditionals
while !quit
    if player.bankroll <= 0
        puts "Sorry, try again! The house won!"
        quit = true
        break
    end

    puts "#{player.name} has $#{player.bankroll} "
    puts "#{dealer.name} has $#{dealer.bankroll}"
    puts "Type (c) to continue or (q) to quit"

    input = gets.chomp
    if input == "c"
        player.hand = deck.sample(2)
        dealer.hand = deck.sample(2)
        player.sum(player.hand)
        dealer.sum(dealer.hand)
        puts "You have #{player.total}, the house has #{dealer.total}"
        if player.total == 21
            player.bankroll += 10
            dealer.bankroll -= 10 
            puts "You win!"
        elsif player.total > 21
            dealer.bankroll += 10
            player.bankroll -= 10
            puts "the house wins"
        else

            if player.total > dealer.total
                player.bankroll += 10
                dealer.bankroll -= 10 
                puts "You get +$10 in our account"
            elsif dealer.total > player.total
                dealer.bankroll += 10
                player.bankroll -= 10
                puts "The house wins"
            else 
                puts "It's a tie."
            end
        end
    elsif input == 'q'
        quit = true
    else 
        puts "Type (c) to continue or (q) to quit"
    end
end