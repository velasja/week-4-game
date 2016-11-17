$(document).ready(function(){
	var userScore;
	var wins=0;
	var losses=0;
	var randomNumber = 19 + Math.floor(Math.random() * 101);


	function initialize () {
		$("#wins").text(wins);
		$("#losses").text(losses);
		randomNumber = 19 + Math.floor(Math.random() * 101);
		$("#number").text(randomNumber);
		userScore = 0;
		$("#score").text(userScore);
		$("#crystal1").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal2").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal3").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal4").val(Math.floor(Math.random() * 12) + 1);
	}

	initialize();

		$(".crystal").click(function() {
			var a = parseInt($(this).val());
			console.log(a)
			userScore = a + userScore;
			console.log(userScore);
			$("#score").text(userScore);
			compare();
		});

	function compare () {
		if (userScore == randomNumber) {
			alert("You win!");
			wins++;
			console.log(wins);
			console.log(userScore);
			console.log(randomNumber);
			initialize();
		
		} else if (userScore > randomNumber) {
			alert("You lose!");
			losses++;
			console.log(losses);
			initialize();
		}
	}

});

	// };

	// document.addEventListener("click", function(){
	// 	var userScore += crystalInput
	// })

	// user clicks a crystal
	// crystal value is added to userScore

	// if/else statement
		// else if (userScore > randomNumber) {
		// // assign new random value between 1 and 12 to crystals 1-4
		// 	losses += 1;
		// 	var randomValue1 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue2 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue3 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue4 = 1 + Math.floor(Math.random() * 12);
		// 	// assign new random value to randomNumber
		// 	var randomNumber = 19 + Math.floor(Math.random() * 120);
		// 	// reset userScore to 0
		// 	var userScore = 0;
		// } else if (userScore === randomNumber) {
		// 	wins += 1;
		// 	var randomValue1 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue2 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue3 = 1 + Math.floor(Math.random() * 12);
		// 	var randomValue4 = 1 + Math.floor(Math.random() * 12);
		// 	// assign new random value to randomNumber
		// 	var randomNumber = 19 + Math.floor(Math.random() * 120);
		// 	// reset userScore to 0
		// 	var userScore = 0;
		// }
	// } else if ()
		
		

		// else 
	// if userScore === randomNumber
		// add 1 to wins

	// if userScore > randomNumber
		// add 1 to losses