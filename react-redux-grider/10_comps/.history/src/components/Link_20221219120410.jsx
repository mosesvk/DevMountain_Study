import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({to, children}) => {
    const {navigate} = useContext(NavigationContext)

  return <div>Link</div>;
};

export default Link;
