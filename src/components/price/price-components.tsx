'use client';

import { Box, Paper, Typography, Button } from '@mui/material';
import GenericList from './list-generic';
import { GenericListPrice } from './list-obj';

export default function PriceComponent() {
  return (
    <div style={{ height: '100vh' }}>
      <Box sx={{ mt: 4, p: 2 }}>
        <Typography
          gutterBottom
          textAlign="center"
          variant="h3"
          color="initial"
        >
          Escolha o plano perfeito para{' '}
          <span style={{ color: '#BBEE33' }}>você</span>.
        </Typography>
        <Typography textAlign="center" variant="body1" color="initial">
          Experimente o fit<span style={{ color: '#BBEE33' }}>boost</span>. sem
          anúncios e com todas suas ferramentas para acesso.
        </Typography>
      </Box>
      <div
        style={{
          width: '100%',
          background: '#FBFBFB',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: '16px 0px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <Paper
            sx={{
              height: '140px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button variant="contained" sx={{ background: '#1C1B1B' }}>
              Padrão
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <Typography variant="body1" color="initial">
                R$
              </Typography>
              <Typography
                sx={{
                  fontSize: '2rem',
                  lineHeight: 1,
                }}
                color="initial"
              >
                12,90
              </Typography>
              <Typography variant="body1" color="initial">
                /mês
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              position: 'relative',
              background: '#1C1B1B',
              height: '140px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <div
              style={{
                color: '#333',
                display: 'flex',
                background: '#BBEE33',
                position: 'absolute',
                width: '100px',
                top: '-8px',
                marginLeft: 'auto',
                marginRight: 'auto',
                left: '0',
                right: '0',
                justifyContent: 'center',
                borderRadius: '2px',
                padding: '2px',
              }}
            >
              <p>Mais popular</p>
            </div>
            <Button
              variant="contained"
              color="primary"
              sx={{ color: '#1C1B1B', fontWeight: '600' }}
            >
              boost
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <Typography variant="body1" color="secondary.light">
                R$
              </Typography>
              <Typography
                sx={{
                  fontSize: '2rem',
                  lineHeight: 1,
                }}
                color="secondary.light"
              >
                16,90
              </Typography>
              <Typography variant="body1" color="secondary.light">
                /mês
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box display="grid" justifyContent="center">
          <Typography gutterBottom variant="subtitle1" color="initial">
            Benefícios da assinatura**
          </Typography>
        </Box>
        {GenericListPrice.map((item, index) => (
          <div key={index}>
            <GenericList
              tema={item.tema}
              texto_boost={item.texto_boost}
              texto_padrao={item.texto_padrao}
            />
          </div>
        ))}
      </div>
      <Box sx={{ p: 2 }}>
        <Button
          sx={{ color: '#1C1B1B', fontWeight: '600' }}
          fullWidth
          variant="contained"
          size="large"
          color="primary"
        >
          Experimente grátis por 7 dias!
        </Button>
      </Box>
    </div>
  );
}
