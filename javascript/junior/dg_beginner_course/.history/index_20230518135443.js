// JS Errors & Error Handling

const makeError = () => {

    try {
        throw new Error('this is a cutom Error')
    } catch (err) {
        console.error(err.name)
        console.error(err.message)
        console.error(err.stack)
    }
}

makeError()

function customError(message) {
    this.message = message
    this.name = 'customError'
    this.stack = `${this.name}: ${this.message}`
}