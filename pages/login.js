import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedRoute from '../components/ProtectedRoute';
import LoginModule from '../modules/Login';

export default function Login() {
  const { data: session } = useSession();
  return (
    <ProtectedRoute inverse>
      <LoginModule />
    </ProtectedRoute>
  );
}
