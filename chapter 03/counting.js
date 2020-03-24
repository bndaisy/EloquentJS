/*  Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

    Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

*/

// First solution

function countsBs(str) {
    if (typeof str === 'string') {
        let count = 0;

        str.split('').forEach(symb => {
            if (symb === 'B') count++;
        });

        return count;
    }
    else {
        return 'Argument is not a string';
    }
}

// Second solution

function countsBs(str) {
    if (typeof str === 'string') {
        let count = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'B') count++;
        }

        return count;
    }
    else {
        return 'Argument is not a string';
    }
}

// First solution part 2

function countChar(str, symb) {
    if (typeof str === 'string' && typeof symb === 'string') {
        let count = 0;

        str.split('').forEach(item => {
            if (item === symb) count++;
        });

        return count;
    }
    else {
        return 'On of arguments is not a string';
    }
}

// Second solution part 2

function countChar(str, symb) {
    if (typeof str === 'string' && typeof symb === 'string') {
        let count = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === symb) count++;
        }

        return count;
    }
    else {
        return 'One of arguments is not a string';
    }
}