'use client';

import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import React from 'react';
import MobileNavigation from './mobile-navigation';
import DesktopNavigation from './desktop-navigation';

export default function HeaderComponent() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            'linear-gradient(125deg, rgba(28,27,27,1)30%,rgba(20,20,20,1))',
          display: 'flex',
          alignItems: {
            md: 'center',
          },
        }}
      >
        <Box
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <MobileNavigation />
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: '60rem',
            display: {
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            justifyContent: 'center',
          }}
        >
          <DesktopNavigation />
        </Box>
      </AppBar>
      {/* DESKTOP */}
    </>
  );
}
