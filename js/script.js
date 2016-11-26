(function() {

var board = document.getElementById('board');
var blocks = document.getElementsByClassName('block')
var numOfTiles = 8;


function createField() {
	for (var i = 0; i < numOfTiles; i++) {
		var tile = document.createElement('div');
		tile.className = 'block';
		tile.id = i;
		board.appendChild(tile)
	}
}
createField();

//Randomize array of letters and assign them on tiles
function randomizeTiles() {
	var letters = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];

	letters.sort(function() {
	    return 0.5 - Math.random();
	});

	for (var i = 0; i < 8; i++) {
		blocks[i].innerHTML = letters[i];	
		blocks[i].style.color = 'red';
	}
}
randomizeTiles();

function clear() {
	setTimeout(function(){
		first.style.color = 'red';
		second.style.color = 'red';
		flipCount = 0;
	},500)
}


function matchedTiles() {
	setTimeout(function(){
		memoryTiles =[];
		flipCount = 0;
		memoryFlipped += 2	},500)
}

var flipCount = 0;
var memoryFlipped = 0;;
var memoryTiles = [];

board.onclick = function (event) {
	var target = event.target;

	if(target.className !== 'block') {return;}

	flipCount += 1;

	if(flipCount == 1) {
		first = target;
		first.style.color = 'white';
		memoryTiles[0]  = target.innerHTML;
	}

	else if(flipCount == 2) {
		second = target;
		second.style.color = 'white';
		memoryTiles[1]  = target.innerHTML;

		if(first.id == second.id) {

			clear();
		}

		else if(memoryTiles[0] == memoryTiles[1]) {
			
			matchedTiles();
		}

		else {

			clear();
		}

	}

//Start button...
}

}());


