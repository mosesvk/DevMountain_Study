
const UserInfo = ({age, name, hobby}) => {

  return (
    <section>
      <h2>Name: {name}</h2>
      <h4>Age: {age}</h4>
      <h4>Hobby: {hobby}</h4>
    </section>
  )
}

const App = () => {

  return (
    <>
      <h2>User Profiles</h2>
      <UserInfo age={23} name='James' hobby='football' />
      <UserInfo age={27} name='Jordan' hobby='basketball' />
    </>
  )
}

export default App
