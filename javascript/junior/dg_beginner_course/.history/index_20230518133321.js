// OBJECTS  --------------------> 
// key-value pairs in curly braces

const vehicle = {
    wheels: 4,
    engine: () => {
        return 'Vroooom'
    }
}

const truck = Object.create(vehicle)
    // console.log(truck)
truck.doors = 2
    // console.log(truck)
    // console.log(truck.wheels)

const car = Object.create(vehicle)
car.engine = () => {
    return 'Whoooosh!'
}
    // console.log(car.engine())


const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page', 
    bass: 'John Paul Johns', 
    drums: 'John Bonham'
}

    // console.log(Object.keys(band))
    // console.log(Object.values(band))

const {vocals: singer, guitar: strings} = band

    // console.log(singer, strings)

function sings({vocals}) {
    return `${vocals} sings`
}

    // console.log(sings(band))






// FACTORY FUNCTION -----------------> 

function pizzaFactory (pizzaState) {
    const crust = 'original'
    const size = pizzaState
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

const myPizza = pizzaFactory('large')
    // invoke the function through the new variable function
    // myPizza.bake()








// CLASSES -------------------------> 
    // public and private class fields (NEW 2020)
class Pizza {
    // public field
    crust = 'original'
    // private field
    #sauce = 'traditional'
    #size
    #price
    constructor(size, price) {
        this.#size = size
        this.#price = price
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}

const newLargePizza = new Pizza('large', 12.99)
newLargePizza.hereYouGo()
console.log(newLargePizza)




