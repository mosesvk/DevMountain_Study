import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>Link</a>;
};

export default Link;
