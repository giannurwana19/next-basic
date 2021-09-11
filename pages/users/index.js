import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

export default function Users({ dataUsers }) {
  const router = useRouter();

  return (
    <Layout pageTitle="Users page">
      <div className={styles['card-container']}>
        <h1 className="title">Users Page</h1>
        {dataUsers.map(user => (
          <div
            key={user.id}
            className={styles.card}
            onClick={() => router.push(`/users/${user.id}`)}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}

// DOCS

// getStaticProps
// proses pemanggilan terjadi di sisi sercer
// sebelum js diload, next sudah memanggil api getStaticProps
// sehingga tidak muncul di network web
// ketika kita menggunakan getStaticProps
// maka halaman ini sudah di bunde lebih dulu sebelum pagenya muncul
// cocok untuk menangani data yang tidak terlalu sering berubah
