class Animal {
    #name

    constructor(name) {
        this.#name = name
    }

    move() {
        console.log(`${this.#name} is running!`)
    }

    eat(){
        console.log(`${this.#name} is eating!`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('gav, gav...')
    }
}

const dog = new Dog('Charly')
const dog2 = new Dog('Jemy')

dog.move()
dog2.eat()
