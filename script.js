/** 
 * @author Viktor Semenov 
 */
 "use strict";

// Config section
var FIELD_WIDTH = 2;
var FIELD_HEIGHT = 2;
var EMPTY_CELL_COORD = 3;

// variables
var puzzle = [];
var frame = [];


// Main section
setup(puzzle);
console.log(puzzle);

shuffle(puzzle);
puzzle.unshift(0);
console.log(puzzle);

var counter = 0;
for (var i = 0; i < FIELD_WIDTH; i++) {
	frame[i] = [];
	for (var j = 0; j < FIELD_HEIGHT; j++) {
		frame[i][j] = puzzle[counter];
		counter++;
	}
}

console.log(frame);

// Function section
function move() {

}

function check() {

}

function shuffle( array ) {
	for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return true;
}

function setup( array ) {
	for (var i = 0; i < FIELD_WIDTH * FIELD_HEIGHT; i++) {
		array[i] = i;
	}
	array.shift();
	return true;
}

