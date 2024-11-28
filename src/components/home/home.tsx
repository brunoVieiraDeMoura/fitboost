'use client';

// import Typography from '@mui/material/Typography';
import style from '@/components/home/home-component.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import imagePath from '../../../public/background.jpg';
export default function HomeComponent() {
  return (
    <div className={style.relative}>
      <div className={style.img}>
        <Image
          priority={true}
          src={imagePath}
          alt="always add alt"
          fill
          style={{ objectFit: 'cover', objectPosition: '35% 20%' }}
        />
      </div>
      <span className={style.shadoweffect} />
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
            maxWidth: '60rem',
            alignItems: 'center',
            width: {
              xs: '100%',
              sm: '100%',
              md: '60%',
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

                color: '#333',
                fontWeight: '600',
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
              sx={{ color: '#BBEE33', fontWeight: '600' }}
              fullWidth
              size="medium"
              variant="outlined"
              color="primary"
            >
              Disponível no iOS
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
