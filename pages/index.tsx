import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
    <Box sx={{ width: '100vw', height: '100vh', maxWidth: '100vw', display: 'flex' }}>
      <Box sx={{ margin: 'auto' }}>
        <Button
          variant="text"
          onClick={() => {
            router.replace('/menu');
          }}
        >
          Kiosk App으로 이동
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
