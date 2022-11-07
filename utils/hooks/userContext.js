import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from '../axios';
import { useRouter } from 'next/router';
const Context = createContext({});

import { useSession } from 'next-auth/react';

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/logout' && router.pathname !== '/download') {
      if (user && !onboardingComplete) {
        router.push('/login/setup');
      }
    }
  }, [user, onboardingComplete]);

  useEffect(() => {
    fetchUser();
  }, [session]);

  const fetchUser = async () => {
    const { data } = await axios.get('/api/me');
    setUser(data.user);
    setOnboardingComplete(data.onboardingComplete);
  };

  return (
    <Context.Provider value={{ user, setUser, error, loading }}>
      {children}
    </Context.Provider>
  );
}

const useUserContext = () => useContext(Context);

export { UserProvider, useUserContext, Context };
