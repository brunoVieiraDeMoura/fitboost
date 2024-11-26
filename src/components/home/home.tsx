'use client';

// import Typography from '@mui/material/Typography';
import style from './home-component.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import imagePath from '../../../public/background.jpg';
export default function HomeComponent() {
  return (
    <section className={style.relative}>
      <div className={style.img}>
        <Image
          priority={true}
          src={imagePath}
          alt="always add alt"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <span className={style.shadoweffect} />
      <div className={style.container}>
        <Box sx={{ m: 2, zIndex: 4 }}>
          <Typography
            className="animeLeft"
            gutterBottom
            variant="h3"
            sx={{ color: '#fff' }}
          >
            Transforme seu treino, alcance seus objetivos!
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
          <Button
            className="animeLeftLow"
            sx={{ mb: 1, color: '#333' }}
            fullWidth
            size="large"
            variant="contained"
            color="primary"
          >
            Baixe agora no Android
          </Button>
          <Button
            className="animeLeftLow"
            sx={{ color: '#BBEE33' }}
            fullWidth
            size="large"
            variant="outlined"
            color="primary"
          >
            Disponível no iOS
          </Button>
        </Box>
      </div>
    </section>
  );
}
