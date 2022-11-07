import ProtectedRoute from '../../components/ProtectedRoute';
import LoginModule from '../../modules/Login';
import Layout from '../../components/Layout';
import OnboardingModule from '../../modules/OnboardingModule';

export default function Login() {
  return (
    <ProtectedRoute>
      <Layout page={{ title: 'Onboarding' }}>
        <OnboardingModule />
      </Layout>
    </ProtectedRoute>
  );
}
