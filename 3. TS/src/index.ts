
interface Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
}

function calculateArea(width: number, height: number) : number {
    return width * height;
}

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(this.name," is speaking");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        //I thought it was this.name . . . (forgot super in java)
        super(name);
    }

    speak(): void {
        console.log(this.name," is speaking");
    }
}

let x: string | number;

x = "String";
console.log(x);

x = 2025;
console.log(x);
