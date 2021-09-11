import { useRouter } from 'next/router';
import Header from '../../components/Header';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>detail users {id}</h1>
    </div>
  );
}
