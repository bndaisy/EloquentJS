/*  Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.
*/

// With using a loop

function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) return false;
    }
    return true;
}

// With using the some method

function every(array, callback){
    return !array.some(item => !callback(item))
}
