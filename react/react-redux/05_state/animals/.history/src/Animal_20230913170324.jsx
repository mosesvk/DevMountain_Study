

const Animal = (type) => {
  return (
    <div className='animal-show'>
        <img alt='animal' src={`../src/assets/${type}.svg`} />
    </div>
  )
}

export default Animal