import { useContext } from 'react';
import NavigationContext from '../context/navigation';

function useNavigation() {
    return useContext(NavigationContext)
}