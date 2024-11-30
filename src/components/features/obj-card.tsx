import ListAltIcon from '@mui/icons-material/ListAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const CardGObj = [
  {
    title: 'Treinos Personalizados',
    text_description: 'Planos exclusivos com base no seu nível e metas.',
    icon: <ListAltIcon sx={{ fontSize: '42px', color: '#1C1B1B' }} />,
  },
  {
    title: 'Gráficos de Progresso',
    text_description: 'Acompanhe seus resultados e veja sua evolução.',
    icon: <InsightsIcon sx={{ fontSize: '42px', color: '#1C1B1B' }} />,
  },
  {
    title: 'Alertas e Lembretes',
    text_description:
      'Nunca mais perca um treino com nossas notificações personalizadas.',
    icon: <NotificationsNoneIcon sx={{ fontSize: '42px', color: '#1C1B1B' }} />,
  },
  {
    title: 'Biblioteca de Exercícios',
    text_description:
      'Mais de 300 exercícios personalizados e ajustados às suas necessidades.',
    icon: <FitnessCenterIcon sx={{ fontSize: '42px', color: '#1C1B1B' }} />,
  },
];
