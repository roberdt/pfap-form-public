import React from 'react';
import Pfapappbar from '@/components/pfapappbar';
import Pfapcontainer from '@/components/pfapcontainer';
import Pfapfooter from '@/components/pfapfooter';
import { Typography } from '@mui/material';

function About() {
  const divStyle: React.CSSProperties = {
    color: '#00518c',
  };

  return (
    <div>
      <Pfapappbar />
      <Pfapcontainer>
        <Typography variant="h4" component="h1" sx={{ mb: 2, color: divStyle.color }}>
          Patient Financial Assistance Forms
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: divStyle.color }}>
          Web application for patients to submit PFAP Applications to hospitals.
        </Typography>
        <Typography variant="body2" sx={{ color: divStyle.color }}>
          Version 1.0.0
        </Typography>
      </Pfapcontainer>
      <Pfapfooter />
    </div>
  );
}

export default About;

