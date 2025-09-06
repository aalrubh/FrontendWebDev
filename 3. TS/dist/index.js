function calculateArea(width, height) {
    return width * height;
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name, " is speaking");
    }
}
class Cat extends Animal {
    constructor(name) {
        //I thought it was this.name . . . (forgot super in java)
        super(name);
    }
    speak() {
        console.log(this.name, " is speaking");
    }
}
let x;
x = "String";
console.log(x);
x = 2025;
console.log(x);
export {};
//# sourceMappingURL=index.js.map