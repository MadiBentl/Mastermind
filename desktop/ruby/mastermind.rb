class Mastermind
	def initialize
	    @combo = Array.new
		@turns_left = 10
		@right_place = 0
		@right_num = 0
		gameplay
	end
		
	def gameplay
		puts "Welcome to Mastermind! Enter number of players: 1 or 2"
		@no_of_players = gets.chomp.to_i
		if @no_of_players == 2 
			two_players
		else
			generate_combo
		end
		while @turns_left > 0 && win? == false
			user_turn
			evaluate(@user_guess)
			return_feedback
		end
		if @turns_left == 0
			puts "Sorry, you lost! The correct combination was: #{@combo}! Do you want to play again? Enter any letter to keep playing."
			keep_playing = gets.chomp
			if keep_playing.is_a? String
				initialize
			end
		end
	end
	
	protected
	
	def two_players
		puts "Player 1, enter your code (4 characters)"
		@combo = gets.chomp.to_s.split(//).map{|chr| chr.to_i}
		@spaces = 4
		puts "Code entered. Player 2, it is now your turn to guess the code. Good luck!"
	end	
	
	def generate_combo
		puts "Welcome to single player! Choose your difficulty level: 3, 4, or 5. You will have 10 turns to complete the game. Please note that each digit must be between 0 and 5 inclusive."
		@levels = gets.chomp
		@levels.downcase!
		case @levels
			when "3"
			@spaces = 3
			when "4"
			@spaces = 4
			when "5"
			@spaces = 5
			else
			@spaces = 3
		end
		@spaces.times do
			@combo << rand(6)
		end
		print @combo
	end
	
	def user_turn
		puts "Enter your guess:"
		@user_guess = gets.chomp
		@user_guess.to_s.split(//).map{|chr| chr.to_i}
		if is_right_length(@user_guess) == true
			@turns_left -= 1
		else
			puts "Your answer wasn't the right length. Please try again."
			user_turn
		end
	end
		
	def win? 
		if @spaces == @right_place
			return true
		else
			return false
		end
	end
	 
	def evaluate(user_guess) #after each turn
		@right_place = 0
		@right_num = 0
		num_pos = @spaces - 1
		@user_guess = user_guess.to_s.split(//).map{|chr| chr.to_i}
		@spaces.times do
			if @user_guess[num_pos] == @combo[num_pos]
				@right_place += 1
			end
			num_pos -= 1
		end
		@combo.uniq.each do |num|
			if @user_guess.include?(num)
				if @combo.count(num) > 1
					@right_num += [@user_guess.count(num), @combo.count(num)].min
				else
					@right_num += 1
				end
			end
		end
	end
	def is_right_length(user_guess)
		if (user_guess.length == @spaces)
			return true
		else
			return false
		end
	end	
	def return_feedback
		if win? == true
			puts "Congratulations! You won the game with #{@turns_left} turns left. Would you like to keep playing? Enter any letter to keep playing."
			keep_playing = gets.chomp
			if keep_playing.is_a? String
				initialize
			end

		else
			puts "Right numbers: #{@right_num}"
			puts "Right positions: #{@right_place}"
			puts "You have #{@turns_left} turns left"
		end
	end
end
#get rid of it giving the right answer right away
#push to git hub

game = Mastermind.new
