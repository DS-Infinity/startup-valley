import ProtectedRoute from '../components/ProtectedRoute';
import Layout from '../components/Layout';
import Content from '../modules/Marketplace';

export default function Home() {
  return (
    // <ProtectedRoute>
      <Layout page={{ title: 'Shop' }}>
        <Content />
      </Layout>
    // </ProtectedRoute>
  );
}
