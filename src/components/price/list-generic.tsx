'use client';

import { Box, Divider, Typography } from '@mui/material';
type ITexts = {
  tema: string;
  texto_padrao: string | React.ReactNode;
  texto_boost: string | React.ReactNode;
};

export default function GenericList({
  tema,
  texto_padrao,
  texto_boost,
}: ITexts) {
  return (
    <>
      <Box>
        <Divider component="li" />
        <Typography
          textAlign="center"
          sx={{ mt: 1 }}
          variant="subtitle1"
          color="initial"
        >
          {tema}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '8px',
            textAlign: 'center',
          }}
        >
          <Typography gutterBottom variant="subtitle1" color="initial">
            {texto_padrao}
          </Typography>
          <Typography gutterBottom variant="subtitle1" color="initial">
            {texto_boost}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
