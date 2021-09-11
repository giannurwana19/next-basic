import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log('dipanggil setelah 2 detik');
      router.push('/');
    }, 2000)
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Ooops... </h1>
      <h1 className="title-not-found">
        Halaman yang anda carii tidak ditemukan
      </h1>
    </div>
  );
}
