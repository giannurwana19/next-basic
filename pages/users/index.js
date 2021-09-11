import Layout from '../../components/Layout';

export default function Users({ dataUsers }) {
  // console.log(dataUsers);

  return (
    <Layout pageTitle="Users page">
      <h1 className="title">Users Page</h1>
      {dataUsers.map(user => (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <hr />
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await response.json();

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
