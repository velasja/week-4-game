var randomValue1;
var randomValue2;
var randomValue3;
var randomValue4;
var crystalInput = "";
var randomNumber;
var userScore=0;
var wins=0;
var losses=0;

$(document).ready(function(){
	
	// variables wins, losses and userScore = 0

	var randomNumber = 19 + Math.floor(Math.random() * 120);
	
	$("#number").text(randomNumber);
	$("#wins").text(wins);
	$("#losses").text(losses);
	// randomNumber between 18 and 120 generated, written to screen

	var randomValue1 = 1 + Math.floor(Math.random() * 12);
	var randomValue2 = 1 + Math.floor(Math.random() * 12);
	var randomValue3 = 1 + Math.floor(Math.random() * 12);
	var randomValue4 = 1 + Math.floor(Math.random() * 12);
	// crystals given value between 1 and 12
	$(".crystal").click(function() {
		if (userScore < randomNumber) {
			$("#score").html(this)

	};
	// document.addEventListener("click", function(){
	// 	var userScore += crystalInput
	// })

	// user clicks a crystal
	// crystal value is added to userScore

	// if/else statement
	// if userScore >= randomNumber
		// assign new random value between 1 and 12 to crystals 1-4
		// assign new random value to randomNumber
		// reset userScore to 0

		// else 
	// if userScore === randomNumber
		// add 1 to wins

	// if userScore > randomNumber
		// add 1 to losses

	console.log(randomNumber);
	console.log(randomValue1);
	console.log(randomValue2);
	console.log(randomValue3);
	console.log(randomValue4);

});