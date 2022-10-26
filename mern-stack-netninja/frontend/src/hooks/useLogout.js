import { useAuthContext } from './useAuthContext'
import { userWorkoutsContext } from './userWorkoutsContext'

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = userWorkoutsContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    authDispatch({ type: 'LOGOUT' })
    workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }

  return { logout }
}