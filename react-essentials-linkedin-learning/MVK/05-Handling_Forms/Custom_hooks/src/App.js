import {useState} from 'react'

// Now we're going to create our own custom hook
// Remember a hook is just a function that can be used for any reusable code

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

const App = () => {
    const [titleProps, resetTitle] = useInput('');
    const [colorProps, resetColor] = useInput('#000000')

    const submit = (e) => {
        e.preventDefault()

        console.log(`title: ${titleProps.value}, color: ${colorProps.value}`)

        resetTitle()
        resetColor()
    }

    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type='text'
                placeholder='Color Title...'
            />
            <input
                {...colorProps}
                type='color' 
            />
            <button>Add</button>
        </form>
    );
};

export default App;
