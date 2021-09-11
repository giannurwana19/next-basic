import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';
import Head from 'next/head';

export default function Layout({ children, pageTitle = 'Web NextJS' }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
