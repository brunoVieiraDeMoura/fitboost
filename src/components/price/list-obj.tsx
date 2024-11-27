import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const GenericListPrice = [
  {
    tema: 'Gráficos de gerenciamento de treino',
    texto_padrao: 'Gerenciamento Padrão',
    texto_boost: 'Acessos exclusivo alimentar e físico.',
  },
  {
    tema: 'Treinos personalizados',
    texto_padrao: <CheckCircleOutlineIcon />,
    texto_boost: <CheckCircleOutlineIcon />,
  },
  {
    tema: 'Treinos com video aulas semanais',
    texto_padrao: <HighlightOffIcon />,
    texto_boost: <CheckCircleOutlineIcon />,
  },
  {
    tema: 'Personal treiner online',
    texto_padrao: <HighlightOffIcon />,
    texto_boost: <CheckCircleOutlineIcon />,
  },
];
