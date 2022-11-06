import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedRoute from '../components/ProtectedRoute';

export default function Login() {
  const { data: session } = useSession();
  return (
    <ProtectedRoute inverse>
      <div>
        <button
          onClick={() => {
            signIn();
          }}
        >
          login
        </button>
      </div>
    </ProtectedRoute>
  );
}
