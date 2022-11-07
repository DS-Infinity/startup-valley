import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedRoute from '../../components/ProtectedRoute';
import LoginModule from '../../modules/Login';
import Layout from '../../components/Layout';

export default function Login() {
  const { data: session } = useSession();
  return (
    <ProtectedRoute>
      <Layout page={{ title: 'Login' }}>
        <LoginModule />
      </Layout>
    </ProtectedRoute>
  );
}
