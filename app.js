function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		//show ques
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	if(quiz.score >= 19) {
		gameOverHtml += "<br/><br/> <center><h1> You are one of the biggest F.R.I.E.N.D.S. fan</h1> </center>";
	}
	else if(quiz.score >= 12) {
		gameOverHtml += "<br/><br/> <center><h1> You know the show very well</h1> </center>";
	}
	else
		gameOverHtml += "<br/><br/><center> <h1> Not a Die hard fan </h1></center>";
	gameOverHtml += "<br/><br/><br/><center><h2><a style='font-size:30px; font-family:cursive; color:black;' href='https://roothd17.github.io/friends.github.io/'>Click here F.R.I.E.N.D.S.</a></h2></center>";
	element.innerHTML = gameOverHtml;
};

var questions = [ 
	new Question("Before Ralph Lauren Rachel Worked at ?", ["Central Perk", "with Monica", "Blooming Dales", "Nowhere"], "Blooming Dales"),
	new Question("How many Sisters does Joey have ?", ["Eight", "Seven", "Six", "Five"], "Seven"),
	new Question("Which one is the boys favourite movie ?", ["Die Hard", "Star Wars", "Bambi", "Rambo"], "Die Hard"),
	new Question("Which country was Ross and Emily's honeymoon supposed to be in ?", ["Italy", "Greece", "France", "Spain"], "Greece"),
	new Question("What does Monica's father call her ?", ["Harmonica", "Pumpkin", "Little Harmonica", "Cupcake"], "Little Harmonica"),
	new Question("What name does Rachel suggest for Ross and Julie's cat ?", ["Michael", "Ross Jr.", "Mr Meowingtons", "She didn't"], "Michael"),
	new Question("Who told Rachel that Ross slept with another woman ?", ["Janice", "Phoebe's Friend", "Gunther", "Chandler"], "Gunther"),
	new Question("Who did Ross and Rachel hire to be Emma's second nanny ?", ["Sandy", "Molly", "Tabitha", "Kathy"], "Molly"),		
	new Question("Where did Chandler hold the Bacheolar party when Ross was marrying Carol ?", ["Dennys", "Pizza Hut", "KFC", "McDownlads"], "Pizza Hut"),
	new Question("Who is the last person to leave the set on the Finale of Friends ?", ["Ross", "Chandler", "Rachel", "Phoebe"], "Ross"),
	new Question("How much of a Tip does Monica recieve from Pete when working in a diner ?", ["$100", "$10000", "$30000", "$20000"], "$20000"),		
	new Question("What did Monica and Chandler get from Joey's parents as a wedding gift ?", ["A Salami Buddy", "A Bologna Booter", "A Bologna Buddy", "A Salami Booter"], "A Salami Buddy"),
	new Question("What did Monica's boyfriend Richard do for work ?", ["Orthodontist", "Reflexologist", "Receptionist", "Ophthalmolgist"], "Ophthalmolgist"),
	new Question("Who said 'How's the inappropriate crush on Rachel coming' ?", ["Chandler", "Monica", "Joey", "Phoebe"], "Chandler"),
	new Question("Who said 'Wow, I get really crabby when I cook' ?", ["Rachel", "Monica", "Joey", "Phoebe"], "Rachel"),
	new Question("Who said 'That'll teach you to lick my muffin' ?", ["Chandler", "Monica", "Joey", "Rachel"], "Monica"),
	new Question("Who said 'I smell Smoke! Maybe that's because somebody's pants are on fire!' ?", ["Chandler", "Monica", "Joey", "Phoebe"], "Phoebe"),
	new Question("Who said 'I have one question for you, were you or were you not on a gay cruise!' ?", ["Ross", "Monica", "Joey", "Phoebe"], "Joey"),
	new Question("Which of these items has Ross NOT stolen from a hotel room ?", ["Toilet paper", "Oranges", "Shampoo", "Bible"], "Oranges"),
	new Question("What was the name of the girl who hit on chandler in Tulsa?", ["Candy", "Selma", "Jenice", "Wendy"], "Wendy")
];

var quiz = new Quiz(questions);

populate();