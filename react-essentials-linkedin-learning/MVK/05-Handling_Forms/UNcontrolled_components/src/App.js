import { useRef } from 'react';
// useRef is a hook where it will reach out to UI element and grab it's value and store it. 


// useRef() creates is what's called an UNCONTROLLED component where we manage our form elements outside of state
// This is different from useState where the component will re-render if there's some sort of change
// useRef() will NOT re-render. We will always have to reach out to the current value 

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault(); // So that the website doesn't refresh wish is the default behavior of the browser

    
  };

  return (
    <>
      <form onSubmit={submit}>
        <input type='text' placeholder='Enter Name of Color' ref={txtTitle} />
        <input type='color' ref={hexColor} />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
