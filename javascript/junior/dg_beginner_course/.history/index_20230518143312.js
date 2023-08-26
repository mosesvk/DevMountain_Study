// JS Errors & Error Handling

const makeError = () => {

    try {
        if (i % 2 !== 0) throw new Error('odd number!')
        console.log('even number')
    } catch (err) {
        console.error(err.stack)
    } finally {
        console.log('....finally')
        i++
    }
}

makeError()

function customError(message) {
    this.message = message
    this.name = 'customError'
    this.stack = `${this.name}: ${this.message}`
}