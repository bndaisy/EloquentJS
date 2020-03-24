/*  1. Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######

*/

// First solution

let symb = '#';

for (let i = 0; i < 7; i++) {
    console.log(symb.repeat(i));
}

// Second solution

let value = '';

for (let i = 0; i < 7; i++) {
    value += '#';
    console.log(value);
}

// Third solution

let str = '';

while (str.length < 7) {
    str += '#';
    console.log(str);
}