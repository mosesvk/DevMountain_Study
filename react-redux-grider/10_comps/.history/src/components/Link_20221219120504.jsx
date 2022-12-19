import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Link = ({to, children}) => {
    const {navigate} = useContext(NavigationContext)

    const handleClick = (event) => {
        
    }

  return <div>Link</div>;
};

export default Link;
