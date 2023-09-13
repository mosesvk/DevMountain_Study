import PropTypes from 'prop-types';
import bird from '../src/assets/bird.svg'

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
