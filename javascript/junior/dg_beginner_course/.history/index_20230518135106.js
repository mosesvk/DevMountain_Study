// JS Errors & Error Handling

const makeError = () => {

    try {

    } catch (err) {
        console.error(err.stack)
    }
}

makeError()

function customError(message) {
    this.message = message
    this.name = 'customError'
    this.stack = `${this.name}: ${this.message}`
}