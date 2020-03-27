/*  Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
*/


function arrayToList(arr) {
    if (arr.length - 1) {
        return {
            value: arr.shift(),
            rest: arrayToList()
        }
    } else {
        return {
            value: arr.shift(),
            rest: null
        }
    }
}

function listToArray(list) {
    let arr = [];

    while (list) {
        arr.push(list.value);
        list = list.rest;
    }

    return arr;
}

function prepend(list, elem) {
    return {
        value: elem,
        rest: list
    }
}

function nth(list, position) {
    if (list === null) {
        return undefined;
    } else {
        if (1 === position) {
            return list.value;
        } else {
            return nth(list.next, --position);
        }
    }n
}