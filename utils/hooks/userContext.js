import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from '../axios';
const Context = createContext({});

import { useSession } from 'next-auth/react';

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    fetchUser();
  }, [session]);

  const fetchUser = async () => {
    const { data } = await axios.get('/api/me');
    setUser(data.user);
  };
  return (
    <Context.Provider value={{ user, setUser, error, loading }}>
      {children}
    </Context.Provider>
  );
}

const useUserContext = () => useContext(Context);

export { UserProvider, useUserContext, Context };
