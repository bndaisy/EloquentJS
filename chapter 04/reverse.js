/*  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr) {
    let resultArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        resultArray.push(arr[i]);
    }

    return resultArray;
}

// First solution 

function reverseArrayInPlace(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        arr.splice(i, 0, arr.pop());
    }

    return arr;
}

// Second solution

function reverseArrayInPlace(arr) {

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let j = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = j;
    }

    return arr;
}