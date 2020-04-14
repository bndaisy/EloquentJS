/*  Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
*/

class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        this.group = this.group.filter((item) => item !== value)
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(array) {
        let group = new Group();
        for (let value of array) {
            group.add(value)
        }
        return group;
    }
}