import ListAltIcon from '@mui/icons-material/ListAlt';
import InsightsIcon from '@mui/icons-material/Insights';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const CardGObj = [
  {
    title: 'Treinos Personalizados',
    text_description: 'Planos exclusivos com base no seu nível e metas.',
    icon: <ListAltIcon sx={{ fontSize: '42px' }} />,
  },
  {
    title: 'Gráficos de Progresso',
    text_description: 'Acompanhe seus resultados e veja sua evolução.',
    icon: <InsightsIcon sx={{ fontSize: '42px' }} />,
  },
  {
    title: 'Alertas e Lembretes',
    text_description:
      'Nunca mais perca um treino com notificações personalizadas.',
    icon: <NotificationsNoneIcon sx={{ fontSize: '42px' }} />,
  },
  {
    title: 'Biblioteca de Exercícios',
    text_description:
      'Mais de 300 exercícios detalhados para todas as partes do corpo.',
    icon: <FitnessCenterIcon sx={{ fontSize: '42px' }} />,
  },
];
