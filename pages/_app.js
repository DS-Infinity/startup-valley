import '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '../utils/hooks/userContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
