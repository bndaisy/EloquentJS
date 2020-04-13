/*  Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
*/

class Group {
    constructor() {
        this.group = [];
    }

    add(x) {
        if (!this.has(x)) {
            this.group.push(x);
        }
    }

    delete(x) {
        this.group = this.group.filter((item) => item !== x)
    }

    has(x) {
        return this.group.includes(x);
    }

    static from(arr) {
        let group = new Group();
        for (let i of arr) {
            group.add(i)
        }
        return group;
    }
}