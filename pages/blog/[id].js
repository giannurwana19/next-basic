import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function BlogDetail({ blog }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Blog detail {id}</h1>
      <h4>{blog.title}</h4>
      <p>{blog.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}
