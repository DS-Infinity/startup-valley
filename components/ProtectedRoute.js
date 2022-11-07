import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, inverse = false }) {
  const { data: session, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null && !inverse) {
      router.push('/login');
    }
    if (session && inverse) {
      router.push('/home');
    }
  }, [session]);

  if (!loading) {
    return children;
  } else {
    return <div>loading...</div>;
  }
}
