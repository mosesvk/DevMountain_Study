// objects 
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

console.log(Object.keys(band))
console.log(Object.values(band))

const {vocals: singer, guitar: strings} = band

console.log(strings)