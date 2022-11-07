import Head from 'next/head';
import Image from 'next/image';
import ProtectedRoute from '../components/ProtectedRoute';
import styles from '../styles/Home.module.scss';
import { useSession, signOut } from 'next-auth/react';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import Layout from '../components/Layout';
import LandingContent from '../modules/Landing';
import Content from '../modules/Home';
import useUser from '../utils/hooks/useUser';

export default function Home() {
  const { user } = useUser();

  return (
    <Layout page={{ title: '' }}>
      <Content />
    </Layout>
  );
}
