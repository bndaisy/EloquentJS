/* We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

	Zero is even.
	One is odd.
	For any other number N, its evenness is the same as N - 2.

	Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

	Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

// First solution with negative value

function isEven(n) {
	if (n < 0) {
		return 'Value is not a positive';
	} else if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n - 2);
	}
}

// Second solution with negative value (but i don't think is a pertinently, because function Math.abs() returns absolutely value of a number, even negative, in the task gave positive numbers, not negative)

function isEven(n) {
	let value = Math.abs(n);
	
	if (value === 0) {
		return true;
	} else if (value === 1) {
		return false;
	} else {
		return isEven(value - 2);
	}
}