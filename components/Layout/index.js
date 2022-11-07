import Head from 'next/head';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav';

export default function Layout({ children, page, landing }) {
  const router = useRouter();
  console.log(landing)
  return (
    <>
      <Head>
        <title>{page.title + ` • Startup Valley`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <div className={styles.main}>
          <div id="popupContainer" />
          <Nav />
          <div className={!landing ? styles.main__content : styles.main__contentlanding}>{children}</div>
        </div>
      </>
    </>
  );
}
