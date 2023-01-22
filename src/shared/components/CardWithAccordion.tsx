import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

interface CardWithAccordionProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

const CardWithAccordion: React.FC<CardWithAccordionProps> = ({ title, subtitle, text, image }) => {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardHeader
        titleTypographyProps={{ fontWeight: 'bold', variant: 'h6' }}
        subheaderTypographyProps={{ variant: 'subtitle1' }}
        title={title}
        subheader={subtitle}
        sx={{ height: '30%', alignItems: 'flex-start' }}
      />
      <CardMedia image={image} sx={{ height: 180, backgroundSize: 'contain' }} />
      <CardContent sx={{ height: '40%', alignItems: 'flex-start' }}>
        <Typography gutterBottom variant="body1">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWithAccordion;
