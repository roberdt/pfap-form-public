import React from 'react';
import Pfapappbar from '@/components/pfapappbar';
import Pfapcontainer from '@/components/pfapcontainer';
import Pfapfooter from '@/components/pfapfooter';
import { Box, Typography } from '@mui/material';

function App() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.log('NEXT_PUBLIC_API_BASE =', process.env.NEXT_PUBLIC_API_BASE);
    }
  }, []);

  return (
    <div>
      <Pfapappbar />
      <Pfapcontainer>
        <Typography variant="h4" component="h1" sx={{ mb: 2, color: '#00518c' }}>
          Welcome to PFAP Form
        </Typography>
        <Box
          sx={{
            p: 3,
            backgroundColor: '#f5f5f5',
            border: '2px solid #00518c',
            borderRadius: '8px',
            mb: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: '#00518c', fontWeight: 'bold' }}>
            !!!!!UNDER CONSTRUCTION!!!!!
          </Typography>
          <Typography variant="body1" sx={{ color: '#00518c', mt: 1 }}>
            Use the menu to log in, register, or learn more about the application.
          </Typography>
        </Box>
      </Pfapcontainer>
      <Pfapfooter />
    </div>
  );
}

export default App;

