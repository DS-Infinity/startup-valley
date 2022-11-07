import { useUserContext } from './userContext';
import { useContext } from 'react';

export default function useUser() {
  const { user, setUser, error, loading } = useUserContext();
  return { user, setUser, error, loading };
}
