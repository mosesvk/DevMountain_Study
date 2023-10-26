const UserInfo = (props) => {
  const {age, name, hobby} = props
  return (
    <>
      <h2>Name: {name}</h2>
      <h4>Age: {age}</h4>
      <h4>Hobby: {hobby}</h4>
    </>
  )
}

const App = () => {
  return <>
    <UserInfo age={24} name='Jordan' hobby='basketball' />
  </>;
}

export default App;
