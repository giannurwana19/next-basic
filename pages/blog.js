import Layout from '../components/Layout';

export default function blog({ dataBlog }) {
  return (
    <Layout pageTitle="Blog page">
      <h1>Blog Page</h1>
      {dataBlog.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <p>{blog.body}</p>
          <hr />
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  
  return {
    props: { dataBlog },
  };
}

// getServerSideProps cocok untuk mengambil data dinamis
// beda dengan getStaticProps yang langsung men generate html nya
// getServerSideProps akan generate static html ketika dipanggil oleh user