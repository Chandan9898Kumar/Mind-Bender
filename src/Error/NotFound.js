import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const NotFoundView = () => {
  const navigate = useNavigate();

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    top: '100px',
    position: 'relative',
  };
  
  return (
    <Container style={style}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Sorry, page not found!
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
        spelling.
      </Typography>

      <Box
        component="img"
        src="https://free.minimals.cc/assets/illustrations/illustration-404.svg"
        sx={{
          width: 320,
          height: 'auto',
          my: { xs: 5, sm: 10 },
        }}
      />

      <Button size="large" variant="contained" color="inherit" onClick={() => navigate('/')}>
        Go to home
      </Button>
    </Container>
  );
};

export default NotFoundView;
