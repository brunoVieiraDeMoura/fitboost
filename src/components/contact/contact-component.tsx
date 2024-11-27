'use client';

import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function ContactComponent() {
  return (
    <>
      <Box sx={{ p: 2, height: '100%', background: '#1C1B1B' }}>
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
        <Typography variant="body1" color="secondary.light">
          Quer saber mais sobre o fit
          <span style={{ color: '#BBEE33' }}>boost</span> ou precisa de ajuda?
          Entre em contato conosco:
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: 500,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            mt: 4,
            gap: 2,
          }}
        >
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
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', mt: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Link href={'/'}>
              <Typography variant="body1" color="secondary.light">
                Acessibilidade
              </Typography>
            </Link>
            <Link href={'/'}>
              <Typography variant="body1" color="secondary.light">
                Cupom
              </Typography>
            </Link>
            <Link href={'/'}>
              <Typography variant="body1" color="secondary.light">
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
              <Typography variant="body1" color="secondary.light">
                Politicas
              </Typography>
            </Link>
            <Link href={'/'}>
              <Typography variant="body1" color="secondary.light">
                Termos
              </Typography>
            </Link>
            <Link href={'/'}>
              <Typography variant="body1" color="secondary.light">
                Trabalhe Conosco
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              color: '#B7B6B5',
            }}
            variant="body2"
            color="initial"
          >
            © 2024 bruno.moura.code@gmail.com
          </Typography>
        </Box>
      </Box>
    </>
  );
}
