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
console.log(truck.wheels)