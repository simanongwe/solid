class Animal {
    constructor(name){
        this.name = name;
    }

    isEasting(){
        console.log("I can eat ");
    }

}

class InsectAnimal extends Animal {
    // insect behaviour
}

class MammalAnimal extends Animal {
    makesSound() {
        console.log("I can make a sound");
    }
};

class Dog extends MammalAnimal {
    makesSound () {
        console.log("huff huff");
    }
}

class Ant extends Animal {
    isEasting() {
        console.log("ant easting");
    }
}

const dog = new Dog();
const ant = new Ant();
console.log(dog.makesSound());
console.log(ant.isEasting());


