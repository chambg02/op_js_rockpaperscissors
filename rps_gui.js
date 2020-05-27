const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		
		const playerSelect = button.id;
		const options = ["rock", "paper", "scissors"];
		const compSelect = options[Math.floor(Math.random()*options.length)];
		console.log(playerSelect);
		console.log(compSelect);
		const roundResult = playRound(playerSelect, compSelect);
		console.log(roundResult);
		document.getElementById('roundResult').innerHTML=roundResult;
	});
});


function playRound(playerSelect, compSelect) {
	switch (playerSelect) {
		case 'rock':
			switch (compSelect) {
				case 'rock':
					return "Draw!";
				case 'paper':
					return "Paper beats rock, you LOSE!";
				case 'scissors':
					return "Rock beats scissors, you WIN!";
			}
	    case 'paper':
	       	switch (compSelect) {
	       	    case 'rock':
					return "Paper beats rock, you WIN!";
	       		case 'paper':
	       	    	return "Draw, go again!";
	       		case 'scissors':
	       	    	return "Scissors beat paper, you LOSE!";
	       	}
       	case 'scissors':
           	switch(compSelect)	{
           	    case 'rock':
					return "Rock beats scissors, you LOSE!";
           		case 'paper':
           	    	return "Scissors beats paper, you WIN!";
           		case 'scissors':
           	    	return "Draw, go again!";
           	}
	}
}




