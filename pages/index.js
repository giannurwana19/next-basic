import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <h1 className={styles['title-homepage']}>Welcome Gian</h1>
    </Layout>
  );
}
