import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500');

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventefault();

    navigate(to);
  };

  return (
    <a className='classes' href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
