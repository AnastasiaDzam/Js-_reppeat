class Car {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

    class Ship extends Car {
        constructor(name) {
            super(name)
        }

        getPrice() {
            return 100000
        }
    }

    const car = new Car('BMW')
    const ship = new Ship('Rocket')

    console.log(ship.getPrice())