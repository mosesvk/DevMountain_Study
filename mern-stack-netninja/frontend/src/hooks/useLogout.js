import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = useWorkoutsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    authDispatch({ type: 'LOGOUT' })
    workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }

  return { logout }
}