import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function Custom404() {
  const router = useRouter();
  return (
    <div>
      <h1>404 - error Occured .. Page Not Found!!</h1>
      <Button
        variant="text"
        onClick={() => {
          router.back();
        }}
      >
        이전 페이지로 이동
      </Button>
      <Button
        variant="text"
        onClick={() => {
          router.reload();
        }}
      >
        새로고침
      </Button>
      <Button
        variant="text"
        onClick={() => {
          router.replace('/');
        }}
      >
        홈으로 이동
      </Button>
    </div>
  );
}
