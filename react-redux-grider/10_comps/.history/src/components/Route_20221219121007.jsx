import { useContext } from 'react';
import NavigationContext from '../context/navigation';

const Route = ({path, children}) => {

    const {currentPath} = useContext(NavigationContext)

  return <div>Route</div>;
};

export default Route;
