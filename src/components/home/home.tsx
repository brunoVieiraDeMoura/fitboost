'use client';

// import Typography from '@mui/material/Typography';
import style from './home-component.module.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
export default function HomeComponent() {
  return (
    <section className={style.relative}>
      <span className={style.shadoweffect} />
      <div className={style.container}>
        <Box sx={{ m: 2, zIndex: 4 }}>
          <Typography gutterBottom variant="h3" sx={{ color: '#fff' }}>
            Transforme seu treino, alcance seus objetivos!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
            Com o fit<span style={{ color: '#BBEE33' }}>boost</span>, você tem
            treinos personalizados e acompanhamento do seu progresso na palma da
            mão.
          </Typography>
          <Button
            sx={{ mb: 1, color: '#333' }}
            fullWidth
            size="large"
            variant="contained"
            color="primary"
          >
            Baixe agora no Android
          </Button>
          <Button
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
