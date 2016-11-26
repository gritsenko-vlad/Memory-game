(function() {

var board = document.getElementById('board');
var blocks = document.getElementsByClassName('block')
var span = document.querySelector('.moves');
var restartBtn = document.querySelector('.restart');
var numOfTiles = 12;


function createField() {
	for (var i = 0; i < numOfTiles; i++) {
		var tile = document.createElement('div');
		tile.className = 'block';
		tile.id = i;
		board.appendChild(tile)
	}
}
createField();

var letters = ['力', '力', '刀', '刀', '巾', '巾', '夊', '夊', '心', '心', '弓', '弓'];
//Randomize array of letters and assign them on tiles
function randomizeTiles() {

	letters.sort(function() {
	    return 0.5 - Math.random();
	});

	for (var i = 0; i < numOfTiles; i++) {
		blocks[i].innerHTML = letters[i];	
		blocks[i].style.color = 'black';
		blocks[i].style.backgroundColor = 'black';
	}
}
randomizeTiles();

function clear() {
	setTimeout(function(){
		first.style.color = 'black';
		second.style.color = 'black';
		first.style.backgroundColor = 'black';
		second.style.backgroundColor = 'black';
		flipCount = 0;
	},500)
}


function matchedTiles() {
	setTimeout(function(){
		memoryTiles =[];
		flipCount = 0;
		memoryFlipped += 2	
	},500)
}

var flipCount = 0;
var countMoves = 0;
var memoryFlipped = 0;;
var memoryTiles = [];

board.onclick = function (event) {
	var target = event.target;

	if(target.className !== 'block') {return;}

	flipCount += 1;
	countMoves += 1;
	
	if(flipCount == 1) {
		first = target;
		first.style.color = 'white';
		first.style.backgroundColor = '#bd80f4';
		memoryTiles[0]  = target.innerHTML;
		console.log(first);
	}

	else if(flipCount == 2) {
		second = target;
		second.style.color = 'white';
		second.style.backgroundColor = '#bd80f4';
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
	span.innerHTML = countMoves;
	restartBtn.onclick = function() {
		randomizeTiles();
		countMoves = 0;
		span.innerHTML = 0;
	}
}



}());


