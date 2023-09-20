class Animal {
    constructor(name){
        this.name = name;
    }

    isEasting(){
        console.log("I can eat ");
    }

    makesSound() {
        console.log("I can make a sound");
    }
}

class Dog extends Animal {
    makesSound () {
        console.log("huff huff");
    }
}

class Ant extends Animal {
    makesSound() {
        throw new Error("I cannot make a sound");
    }
}

const dog = new Dog();
const ant = new Ant();
console.log(dog.makesSound());
console.log(ant.makesSound());


