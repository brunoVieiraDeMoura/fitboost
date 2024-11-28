'use client';

import { Box, Paper, Typography, Button } from '@mui/material';
import GenericList from './list-generic';
import { GenericListPrice } from './list-obj';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function PriceComponent() {
  return (
    <Box
      sx={{
        height: {
          xs: '100vh',
          sm: '100vh',
          md: '100vh',
        },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          mt: 4,
          p: 2,
          maxWidth: '70rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          gutterBottom
          textAlign="center"
          variant="h3"
          color="initial"
        >
          Escolha o plano perfeito para{' '}
          <span style={{ color: '#a2c41e' }}>você</span>.
        </Typography>
        <Typography
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '60%',
            },
            textAlign: 'center',
          }}
          textAlign="center"
          variant="body1"
          color="initial"
        >
          Teste <span style={{ color: '#a2c41e' }}>Grátis por 7 dias, </span>sem
          preocupações. Você pode alterar ou cancelar seu plano quando quiser.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          width: '50%',
          height: '380px',
        }}
      >
        {/* PLANO PADRÃO DESK */}
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
            justifyContent: 'space-between',
            flexDirection: 'column',
            gap: 2,
            border: '2px solid #1C1B1B',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <Typography textAlign="center" variant="h4" sx={{ color: '#1C1B1B' }}>
            Plano Padrão
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon />
              <Typography
                sx={{ color: '#1C1B1B' }}
                variant="body1"
                color="initial"
              >
                Treinos com video aulas semanais
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon />
              <Typography
                sx={{ color: '#1C1B1B' }}
                variant="body1"
                color="initial"
              >
                Treinos personalizados
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon />
              <Typography
                sx={{ color: '#1C1B1B' }}
                variant="body1"
                color="initial"
              >
                Alertas customizados
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon />
              <Typography
                sx={{ color: '#1C1B1B' }}
                variant="body1"
                color="initial"
              >
                Sem anúncios
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
            }}
          >
            <Typography variant="body1" sx={{ color: '#1C1B1B' }}>
              R$
            </Typography>
            <Typography variant="h4" sx={{ color: '#1C1B1B' }}>
              12,90
            </Typography>
            <Typography variant="body1" sx={{ color: '#1C1B1B' }}>
              /mês
            </Typography>
          </Box>
          <Button
            sx={{
              color: '#1C1B1B',
              border: '2px solid #1c1b1b',
              fontWeight: 'bold',
              '&:hover': {
                color: '#f3f3f3',
                backgroundColor: '#1C1B1B',
                outline: '',
              },
            }}
            variant="outlined"
          >
            Assinar Plano padrão
          </Button>
        </Box>
        {/* PLANO BOOST DESK */}
        <Box
          sx={{
            position: 'relative',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
            },
            justifyContent: 'space-between',
            flexDirection: 'column',
            gap: 2,
            border: '2px solid #1C1B1B',
            padding: '16px',
            borderRadius: '8px',
            background: '#1C1B1B',
          }}
        >
          <div
            style={{
              color: '#333',
              display: 'flex',
              background: '#BBEE33',
              position: 'absolute',
              width: '140px',
              top: '-14px',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: '0',
              right: '0',
              justifyContent: 'center',
              borderRadius: '2px',
              padding: '2px',
              fontWeight: 'bold',
            }}
          >
            <p>Mais popular</p>
          </div>
          <Typography textAlign="center" variant="h4" color="secondary.light">
            Plano <span style={{ color: '#bbee33' }}>boost</span>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon sx={{ color: '#bbee33' }} />
              <Typography variant="body1" color="secondary.light">
                Gráficos de gerenciamento exclusivo alimentar e físico.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon sx={{ color: '#bbee33' }} />
              <Typography color="secondary.light" variant="body1">
                Personal treiner online
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon sx={{ color: '#f3f3f3' }} />
              <Typography color="secondary.light" variant="body1">
                Treinos com video aulas semanais
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <CheckCircleIcon sx={{ color: '#f3f3f3' }} />
              <Typography variant="body1" color="secondary.light">
                Treinos personalizados
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
            }}
          >
            <Typography variant="body1" sx={{ color: '#f3f3f3' }}>
              R$
            </Typography>
            <Typography variant="h4" sx={{ color: '#f3f3f3' }}>
              16,90
            </Typography>
            <Typography variant="body1" sx={{ color: '#f3f3f3' }}>
              /mês
            </Typography>
          </Box>
          <Button
            sx={{
              color: '#1C1B1B',
              fontWeight: 'bold',
              '&:hover': {
                color: '#a2c41e',
                backgroundColor: 'transparent',
                outline: '2px solid #a2c41e',
              },
            }}
            variant="contained"
          >
            Assinar Plano boost
          </Button>
        </Box>
      </Box>
      {/* MOBILE */}
      <Box
        sx={{
          width: '100%',
          background: '#FBFBFB',
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
          },
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
      </Box>
      <Box
        sx={{
          p: 2,
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
          },
        }}
      >
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
    </Box>
  );
}
