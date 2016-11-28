(function() {

var board = document.getElementById('board');
var top = document.getElementById('top');
var blocks = document.getElementsByClassName('block')
var moves = document.querySelector('.moves');
var restartBtn = document.querySelector('.restart');
var numOfTiles = 12;
var letters = ['力', '力', '刀', '刀', '巾', '巾', '夊', '夊', '心', '心', '弓', '弓'];


function createField() {
	for (var i = 0; i < numOfTiles; i++) {
		var tile = document.createElement('div');
		tile.className = 'block';
		tile.id = i;
		board.appendChild(tile)
	}
}


//Randomize array of letters and assign them on tiles
function randomizeTiles() {

	letters.sort(function() {
	    return 0.5 - Math.random();
	});

	for (var i = 0; i < numOfTiles; i++) {
		blocks[i].innerHTML = letters[i];
		blocks[i].classList.add('back');
	}
}


function clear() {
		if(first.id !== second.id){
			setTimeout(function(){
			first.classList.add('back');
			second.classList.add('back');
			flipCount = 0;
		},500)
	}
}

function matchedTiles() {
	setTimeout(function(){
		memoryTiles =[];
		flipCount = 0;
		memoryFlipped += 2	
	},500)
}

function toggleColor() {
	if(first.classList.contains('back')) {
		first.classList.remove('back');
		first.classList.add('front');
	}
	else if(second.classList.contains('back')) {
		second.classList.remove('back');
		second.classList.add('front');
	}
}

var flipCount = 0,
 	countMoves = 0,
 	memoryFlipped = 0;
var memoryTiles = [];

createField();
randomizeTiles();

board.onclick = function (event) {
	var target = event.target;

	if(target == board) {return;}

	flipCount += 1;

	if(flipCount == 1) {
		first = target;
		toggleColor();
		memoryTiles[0]  = first.innerHTML;
	}

	else if(flipCount == 2) {
		second = target;
		toggleColor();
		memoryTiles[1]  = target.innerHTML;

		if(first.id == second.id) {
			flipCount = 1;
			clear();
		}

		else if(memoryTiles[0] == memoryTiles[1]) {
			
			matchedTiles();
			countMoves += 1;
		}

		else {

			clear();
			countMoves += 1;
		}

	}
	moves.innerHTML = countMoves;
	restartBtn.onclick = function() {
		countMoves = 0;
		moves.innerHTML = 0;
		randomizeTiles();
	}
}



}());


