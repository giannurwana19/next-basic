import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <Image src="/profile.png" width={200} height={200} alt="profile" />
      <img src="/profile.png" width={200} height={200} alt="profile" />
      <h1 className={styles['title-homepage']}>Welcome Gian</h1>
    </Layout>
  );
}

// DOCS

// component Image Next js akan mengkompres image kita sehingga jadi lebih kecil
// dan juga ada fitur lazy load, hanya akan load ketika dibutuhkan
