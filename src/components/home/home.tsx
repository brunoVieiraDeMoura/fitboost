'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import imagePath from '../../../public/background.jpg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function HomeComponent() {
  return (
    <Box sx={{ position: 'relative', height: '100dvh', width: '100%' }}>
      <Box sx={{ position: 'absolute', height: '100%', width: '100%' }}>
        <Image
          priority={true}
          src={imagePath}
          alt="always add alt"
          fill
          style={{ objectFit: 'cover', objectPosition: '25% 20%' }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(25deg,rgba(0, 0, 0, 1),rgba(182, 224, 60, 0.05) 75%)',
        }}
      />
      <Box
        sx={{
          width: '100%',
          justifyContent: {
            xs: 'end',
            sm: 'end',
            md: 'center',
          },
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'grid',
          },
          height: '100%',
          flexDirection: 'column',
          alignItems: {
            xs: 'end',
            sm: 'end',
            md: 'center',
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '70rem',
            alignItems: 'center',
            width: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
            p: 2,
            zIndex: 4,
          }}
        >
          <Typography
            className="animeLeft"
            gutterBottom
            variant="h2"
            sx={{ color: '#fff' }}
          >
            Transforme seu treino, alcance{' '}
            <span style={{ color: '#ccee33' }}>seus objetivos</span>!
          </Typography>
          <Typography
            className="animeLeftMedium"
            variant="body1"
            sx={{ mb: 4, color: '#fff' }}
          >
            Com o fit<span style={{ color: '#BBEE33' }}>boost</span>, você tem
            treinos personalizados e acompanhamento do seu progresso na palma da
            mão.
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                md: 'block',
                lg: 'flex',
              },
              gap: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 1,
              },
            }}
          >
            <Button
              className="animeLeftLow"
              sx={{
                mb: {
                  xs: 1,
                  sm: 1,
                  md: 1,
                  lg: 0,
                },
                color: '#1C1B1B',
                fontWeight: '600',
                '&:hover': {
                  color: '#a2c41e',
                  backgroundColor: 'transparent',
                  outline: '2px solid #a2c41e',
                },
              }}
              fullWidth
              size="medium"
              variant="contained"
              color="primary"
            >
              Baixe agora no Android
            </Button>
            <Button
              className="animeLeftLow"
              sx={{
                color: '#BBEE33',
                fontWeight: '600',
                '&:hover': {
                  color: '#1C1B1B',
                  backgroundColor: '#bbee33',
                },
              }}
              fullWidth
              size="medium"
              variant="outlined"
              color="primary"
            >
              Disponível no iOS
            </Button>
          </Box>
          <Box
            sx={{
              mt: 4,
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
              },
            }}
          >
            <Box
              className="animeLeftLow"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Typography variant="h3" color="primary">
                  4.8
                </Typography>
                <TrendingUpIcon
                  sx={{ fontSize: '3.25rem', color: '#ccee33' }}
                />
              </Box>
              <Typography variant="h5" color="secondary.light">
                Ranking da AppStore
              </Typography>
            </Box>
            <Box
              className="animeLeftLow"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // background: 'red',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Typography variant="h3" color="primary">
                  50k<span style={{ color: '#fefefe' }}>+</span>
                </Typography>
              </Box>
              <Typography variant="h5" color="secondary.light">
                Usuários
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
