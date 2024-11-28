import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function DesktopNavigation() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Link style={{ display: 'flex', width: '30%' }} href={'/'}>
          <Typography variant="h4" style={{ color: '#E3E3E3' }}>
            fit
          </Typography>
          <Typography variant="h4" color="primary">
            boost
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          mr: 2,
        }}
      >
        <Link href={'/'}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#E3E3E3',
              '&:hover': {
                color: '#BBEE33',
              },
            }}
          >
            Home
          </Typography>
        </Link>
        <Link href={'/'}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#E3E3E3',
              '&:hover': {
                color: '#BBEE33',
              },
            }}
          >
            Funcionalidades
          </Typography>
        </Link>
        <Link href={'/'}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#E3E3E3',
              '&:hover': {
                color: '#BBEE33',
              },
            }}
          >
            Preços
          </Typography>
        </Link>
        <Link href={'/'}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#E3E3E3',
              '&:hover': {
                color: '#BBEE33',
              },
            }}
          >
            Contato
          </Typography>
        </Link>
      </Box>
    </>
  );
}
