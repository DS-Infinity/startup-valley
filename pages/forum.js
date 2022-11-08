import Layout from '../components/Layout';
import Content from '../modules/Forum';

export default function Forum() {
  return (
    <Layout page={{ title: 'Forum' }}>
      <Content />
    </Layout>
  );
}