// objects 
// key-value pairs in curly braces

const vehicle = {
    wheels: 4,
    engine: () => {
        return 'Vroooom'
    }
}

const truck = Object.create(vehicle)

console.log(truck.engine())