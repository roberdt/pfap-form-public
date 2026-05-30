import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';

interface PfapcontainerProps {
  children: ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  sx?: SxProps<Theme>;
}

function Pfapcontainer({ children, maxWidth = 'md', sx }: PfapcontainerProps) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const onStart = () => setIsNavigating(true);
    const onDone = () => setIsNavigating(false);

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onDone);
    router.events.on('routeChangeError', onDone);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onDone);
      router.events.off('routeChangeError', onDone);
    };
  }, [router.events]);

  return (
    <Container maxWidth={maxWidth}>
      <Box
        sx={{
          mt: 6,
          mb: 12,
          width: '100%',
          position: 'relative',
          ...sx,
        }}
      >
        {isNavigating && (
          <div className="pfap-loader-overlay" aria-live="polite" aria-label="Loading next screen">
            <div className="pfap-loader-balls" aria-hidden="true">
              <span className="pfap-loader-ball" />
              <span className="pfap-loader-ball" />
              <span className="pfap-loader-ball" />
            </div>
          </div>
        )}
        {children}
      </Box>
    </Container>
  );
}

export default Pfapcontainer;

