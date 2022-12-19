import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({to, children}) => {
    const pathName = useContext(NavigationContext)

  return <div>Link</div>;
};

export default Link;
