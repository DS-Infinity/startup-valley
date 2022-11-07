import ProtectedRoute from '../components/ProtectedRoute';
import Layout from '../components/Layout';
import Content from '../modules/AuthHome';

export default function Home() {
  return (
    <ProtectedRoute>
      <Layout page={{ title: 'Home' }}>
        <Content />
      </Layout>
    </ProtectedRoute>
  );
}
