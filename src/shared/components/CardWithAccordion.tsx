import { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

interface CardWithAccordionProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
}
const CardWithAccordion: React.FC<CardWithAccordionProps> = ({ title, subtitle, text, image }) => {
  const [expanded, setExpanded] = useState<boolean>();

  return (
    <Card variant="outlined" sx={{ maxHeight: 600 }}>
      <CardHeader titleTypographyProps={{ fontWeight: 'bold' }} title={title} subheader={subtitle} />
      <CardMedia component="img" image={image} alt="card-image" width={100} />
      <CardContent>
        <Typography variant="inherit">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardWithAccordion;
