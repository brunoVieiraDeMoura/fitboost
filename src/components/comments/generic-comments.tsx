'use client';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
type IGMessage = {
  nome: string;
  idade: string;
  urlitem: string;
  mensagem: string;
};

export default function GenericMessage({
  nome,
  urlitem,
  idade,
  mensagem,
}: IGMessage) {
  return (
    <Card sx={{}}>
      <CardActionArea>
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            justifyContent: 'space-around',
            height: '140px',
            width: {
              xs: '100%',
              sm: '100%',
              md: '400px',
            },
            border: '1px solid #BBEE33',
            background:
              'linear-gradient(25deg,rgba(0,0,0,0.6) 10%,rgba(0,0,0,.9) )',
          }}
        >
          <div
            style={{
              borderRadius: '50%',
              background: `url(${urlitem})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              width: '42px',
              height: '42px',
            }}
          />
          <Box>
            <Typography variant="h6" color="primary" component="div">
              {nome}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: '#888' }}
              component="div"
            >
              {idade} anos.
            </Typography>
            <Typography variant="body2" sx={{ color: '#ddd' }}>
              <span style={{ color: '#BBEE33' }}>{`"`}</span>
              {mensagem}
              <span style={{ color: '#BBEE33' }}>{`"`}</span>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
