// Initialize global variables
var wins = 0;
var ties = 0;
var loss = 0;

// Array of options for computer to pick from
var options = ['R', 'P', 'S'];

var playGame = function () {
	// TODO: Use the prompt() method to ask the user for their choice between 'R', 'P', and 'S' and store the response in a variable named 'userChoice'
	var userChoice = prompt('Choose from R, P, or S');
	console.log('userChoice', userChoice);
	if (userChoice === null) {
		return;
	}

	if (!options.includes(userChoice.toUpperCase())) {
		alert('Please enter a valid choice next time');
		return playGame();
	}

	userChoice = userChoice.toUpperCase();

	// TODO: Randomly select an element from the array 'options' and store it in a variable named 'computerChoice' - Google for example: "How can I select a random element from an array in JavaScript?"
	// var computerChoice = options[Math.floor(Math.random() * options.length)];
	var randomIndex = Math.floor(Math.random() * options.length); // 0, 1, or 2
	console.log('randomIndex', randomIndex);
	var computerChoice = options[randomIndex];
	console.log('computerChoice', computerChoice);

	// TODO: Use the alert() method to display a message to let the user know what the computer has chosen
	alert("Computer's choice " + computerChoice);

	// TODO:
	/*
  Write a conditional statement to determine the outcome:
  - if both userChoice and computerChoice are the same, increment the variable 'ties' by 1 and use the alert() method to let the user know it's a tie
  - else if the user has won, increment the variable 'wins' by 1 and use the alert() method to let the user know
  - else the user lost: increment the variable 'losses' by 1 and use the alert() method to let the user know
  */
	if (userChoice === computerChoice) {
		alert("It's a tie!");
		ties++;
	} else if (
		(userChoice === 'R' && computerChoice === 'S') ||
		(userChoice === 'P' && computerChoice === 'R') ||
		(userChoice === 'S' && computerChoice === 'P')
	) {
		alert('You win!');
		wins++;
	} else {
		alert('Computer wins!');
		losses++;
	}

	// TODO: Use the alert() method to display current 'wins', 'losses', and 'ties'
	alert('Wins: ' + wins + '\n' + 'Losses: ' + losses + '\n' + 'Ties: ' + ties);

	// TODO: Use the confirm() method to ask user to play again and collect the response in a variable named 'playAgain'
	var playAgain = confirm('Do you want to play again?');
	console.log('playAgain', playAgain);

	// TODO: Run the function playGame() if 'playAgain' is true
	if (playAgain) {
		playGame();
	}
};

// Run the game for the first time
playGame();
