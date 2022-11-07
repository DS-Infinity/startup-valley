import ProtectedRoute from '../components/ProtectedRoute';
import LoginModule from '../modules/Login';

export default function Login() {
  return (
    <ProtectedRoute inverse>
      <LoginModule />
    </ProtectedRoute>
  );
}
