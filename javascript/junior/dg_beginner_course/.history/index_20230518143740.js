// JS Errors & Error Handling

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) throw new customError('odd number!');
      if (i % 2 !== 0) throw new Error('Odd Number')
      console.log('even number');
    } catch (err) { // this will execute ONLY if Error occurs
      console.error(err.stack);
    } finally { // this will execute no matter what 
      console.log('....finally');
      i++;
    }
  }
}

makeError();

function customError(message) {
  this.message = message;
  this.name = 'customError';
  this.stack = `${this.name}: ${this.message}`;
}
