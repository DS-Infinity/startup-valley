import Head from 'next/head';
import Image from 'next/image';
import ProtectedRoute from '../components/ProtectedRoute';
import styles from '../styles/Home.module.css';
import { useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <ProtectedRoute>
      <div className={styles.container}>
        {session && (
          <div>
            <h1>hello {session.user.name}</h1>
            <Image
              src={session.user.image}
              alt='Picture of the author'
              width={500}
              height={500}
            />

            <h2>email: {session.user.email}</h2>

            <h2>expires at: {session.expires}</h2>

            <button
              onClick={() => {
                signOut();
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
