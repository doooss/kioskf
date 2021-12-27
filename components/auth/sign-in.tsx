import { Box, Button, Modal, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { common } from 'store/Common';
import { currentManager } from 'store/Manager';
import { useRouter } from 'next/router';

export const SignIn = observer(() => {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  function submitForm() {
    fetch('http://localhost:8000/managers/signin', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        currentManager.currentManager(data);
        router.replace('/manager');
      })
      .catch((err) => {
        alert('이메일과 비밀번호를 확인해주세요');
        console.log(err);
      });
  }

  return (
    <>
      <Button
        onClick={() => {
          common.makeSignInStateToTrue();
        }}
      >
        sign in
      </Button>
      <Modal
        open={common.signInState}
        onClose={() => {
          common.makeSignInStateToFalse();
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            width: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            bgcolor: 'background.paper',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Box sx={{ margin: '20px' }}>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              SIGN IN
            </Typography>
          </Box>
          <Box>
            <TextField
              label="email"
              type="email"
              fullWidth
              variant="standard"
              size="small"
              margin="dense"
              onChange={(e) => {
                const copy = { ...form };
                copy.email = e.target.value;
                setForm({ ...copy });
              }}
            />
          </Box>
          <Box>
            <TextField
              label="password"
              type="password"
              fullWidth
              variant="standard"
              size="small"
              margin="dense"
              onChange={(e) => {
                const copy = { ...form };
                copy.password = e.target.value;
                setForm({ ...copy });
              }}
            />
          </Box>
          <Box>
            <Button fullWidth variant="contained" sx={{ margin: '20px 0' }} onClick={() => submitForm()}>
              로그인
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
});
