import ProtectedRoute from '../../components/ProtectedRoute';
import LoginModule from '../../modules/Login';
import Layout from '../../components/Layout';
import OnboardingModule from '../../modules/Onboarding';

export default function Login() {
  return (
    <ProtectedRoute>
      <Layout page={{ title: 'Onboarding' }}>
        <OnboardingModule />
      </Layout>
    </ProtectedRoute>
  );
}
