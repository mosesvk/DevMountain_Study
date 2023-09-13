

const Animal = ({type}) => {

    console.log(type)
  return (
    <div className='animal-show'>
        <img alt='animal' src={`../src/assets/${type}.svg`} />
    </div>
  )
}

// Animal.propTypes = {
//     type: PropTypes.string.isRequired
// }

export default Animal