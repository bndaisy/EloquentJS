/*  Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
*/

// First solution

function deepEqual(valueFirst, valueSecond) {
    if ((valueFirst === 'object' && typeof valueSecond === 'object') && (valueFirst !== null && valueSecond !== null)) {
        for (let i in valueFirst) {
            for (let j in valueSecond) {
                let result = deepEqual(valueFirst[Object.keys(valueFirst)[i]], valueSecond[Object.keys(valueSecond)[j]]);
                if (result === false) break;
            }
        }
        return result;
    } else {
        return valueFirst === valueSecond;
    }
}

// Second solution
// If objects are equal, but keys order are different - return false. It is trouble.

function deepEqual(valueFirst, valueSecond) {
    return JSON.stringify(valueFirst) === JSON.stringify(valueSecond);
}
