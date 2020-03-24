/*  Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

	Passing this string to console.log should show something like this:

	# # # #
	# # # # 
	# # # #
	# # # # 
	# # # #
	# # # # 
	# # # #
	# # # #

*/

let sizeStr = 8;
let str = '';

for (let i = 0; i < sizeStr; i++) {
	for (let j = 0; j < sizeStr; j++) {
		if ((j + i) % 2 === 0) {
			str += ' ';
		} else {
			str += '#';
		}
	}
	str += '\n';
}
console.log(str)