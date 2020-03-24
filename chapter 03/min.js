/*  Write a function min that takes two arguments and returns their minimum. */

function min(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        if (a > b) {
            return b;
        } else if (a < b) {
            return a;
        } else {
            return 'Numbers is equal';
        }
    } else {
        return 'One of arguments is not a number';
    }
}