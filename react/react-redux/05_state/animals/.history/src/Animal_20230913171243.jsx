import PropTypes from 'prop-types';
import bird from '../src/assets/bird.svg'
import dog from '../src/assets/dog.svg'
import cat from '../src/assets/cat.svg'
import cow from '../src/assets/cow.svg'
import gator from '../src/assets/gator.svg'
import horse from '../src/assets/gator.svg'

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
