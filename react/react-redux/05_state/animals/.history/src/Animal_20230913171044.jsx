import PropTypes from 'prop-types';

const Animal = ({ type }) => {
    console.log(type)
  return (
    <div className='animal-show'>
      <img className='animal' alt='animal' src={`../src/assets/${type}.svg`} />
    </div>
  );
};

Animal.propTypes = {
  type: PropTypes.string.isRequired
};

export default Animal;
