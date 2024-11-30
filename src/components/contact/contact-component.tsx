'use client';

import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function ContactComponent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: '#1C1B1B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          mt: {
            xs: 2,
            md: 4,
          },
          maxWidth: '70rem',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'grid',
            },
            justifyContent: 'center',
            flexDirection: 'column',
            gridTemplateColumns: {
              xs: '',
              sm: '',
              md: '1fr 1fr',
            },
            gap: 4,
          }}
        >
          {/* TITLE DESCRIPTION */}
          <Box>
            <Typography
              sx={{
                mt: 4,
              }}
              gutterBottom
              variant="h3"
              color="secondary.light"
            >
              <span style={{ color: '#BBEE33' }}>Fale </span>com a gente!
            </Typography>
            <Typography
              sx={{
                width: {
                  xs: '100%',
                  sm: '100%',
                  md: '80%',
                },
              }}
              variant="body1"
              color="secondary.light"
            >
              Quer saber sobre o fit
              <span style={{ color: '#BBEE33' }}>boost</span> ou precisa de
              ajuda? Entre em contato conosco!
            </Typography>
            <Divider
              sx={{
                color: 'white',
                background: '#ccee33',
                mt: 4,
                mb: 2,
              }}
              variant="fullWidth"
              component="li"
            />
            <Box>
              <Typography
                textAlign="center"
                variant="body1"
                color="secondary.light"
              >
                Outras informações da fit
                <span style={{ color: '#bbee33' }}>boost</span>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  mt: 4,
                  justifyContent: 'space-around',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    gap: 3,
                  }}
                >
                  <Link style={{ width: '120px' }} href={'/'}>
                    <Typography variant="body2" color="secondary.light">
                      Acessibilidade
                    </Typography>
                  </Link>
                  <Link style={{ width: '120px' }} href={'/'}>
                    <Typography variant="body2" color="secondary.light">
                      Cupom
                    </Typography>
                  </Link>
                  <Link style={{ width: '120px' }} href={'/'}>
                    <Typography variant="body2" color="secondary.light">
                      Documentação
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    gap: 3,
                  }}
                >
                  <Link href={'/'}>
                    <Typography
                      style={{ width: '120px' }}
                      variant="body2"
                      color="secondary.light"
                    >
                      Politicas
                    </Typography>
                  </Link>
                  <Link href={'/'}>
                    <Typography
                      style={{ width: '120px' }}
                      variant="body2"
                      color="secondary.light"
                    >
                      Termos
                    </Typography>
                  </Link>
                  <Link href={'/'}>
                    <Typography
                      style={{ width: '140px' }}
                      variant="body2"
                      color="secondary.light"
                    >
                      Trabalhe Conosco
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            {/* FORM */}
            <Box>
              <Box
                component="form"
                sx={{
                  maxWidth: 500,
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: {
                    xs: 0,
                    sm: 0,
                    md: 2,
                  },
                  background: {
                    xs: '',
                    sm: '',
                    md: 'rgba(255,255,255,0.03)',
                  },
                  borderRadius: 1,
                  mt: 4,
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                    },
                  }}
                  variant="h4"
                  color="secondary.light"
                >
                  Contate-nos
                </Typography>
                <TextField
                  label="Name"
                  name="name"
                  placeholder="Digite aqui o seu nome..."
                  fullWidth
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Digite aqui o seu email..."
                  fullWidth
                  required
                />
                <TextField
                  label="Mensagem"
                  name="message"
                  fullWidth
                  placeholder="Digite aqui a sua mensagem..."
                  multiline
                  rows={4}
                  required
                />
                <Button
                  sx={{ color: '#1C1B1B', fontWeight: 'bold' }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Enviar
                </Button>
                <Divider
                  sx={{ color: 'white', mt: 2, background: '#ccee33' }}
                  variant="middle"
                  component="li"
                />
              </Box>
            </Box>
            {/* SOCIAL */}
            <Box>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                }}
              >
                <Link href={'https://web.whatsapp.com/'}>
                  <WhatsAppIcon sx={{ fontSize: '38px', color: '#ccee33' }} />
                </Link>
                <Link href={'https://www.instagram.com'}>
                  <InstagramIcon sx={{ fontSize: '38px', color: '#ccee33' }} />
                </Link>
                <Link href={'https://x.com/?lang=pt-br'}>
                  <XIcon sx={{ fontSize: '38px', color: '#ccee33' }} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{ color: 'white', mt: 4, background: 'rgba(255,255,255,0.05)' }}
          variant="middle"
          component="li"
        />
        {/* EXTRA MENU */}
        <Box
          sx={{
            display: {
              xs: 'bloack',
              sm: 'block',
              md: 'none',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mt: 4,
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Link style={{ width: '120px' }} href={'/'}>
                <Typography variant="body2" color="secondary.light">
                  Acessibilidade
                </Typography>
              </Link>
              <Link style={{ width: '120px' }} href={'/'}>
                <Typography variant="body2" color="secondary.light">
                  Cupom
                </Typography>
              </Link>
              <Link style={{ width: '120px' }} href={'/'}>
                <Typography variant="body2" color="secondary.light">
                  Documentação
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Link href={'/'}>
                <Typography
                  style={{ width: '120px' }}
                  variant="body2"
                  color="secondary.light"
                >
                  Politicas
                </Typography>
              </Link>
              <Link href={'/'}>
                <Typography
                  style={{ width: '120px' }}
                  variant="body2"
                  color="secondary.light"
                >
                  Termos
                </Typography>
              </Link>
              <Link href={'/'}>
                <Typography
                  style={{ width: '140px' }}
                  variant="body2"
                  color="secondary.light"
                >
                  Trabalhe Conosco
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* COPY */}
        <Box>
          <Box>
            <Typography
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                color: '#B7B6B5',
              }}
              variant="body2"
              color="secondary.light"
            >
              <span style={{ color: '#bbee33' }}>
                bruno.moura.code@gmail.com
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
