import { Grid, Typography } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import CardWithAccordion from '../../shared/components/CardWithAccordion';
import Carousel from 'react-material-ui-carousel';
import { itemsCarousel } from './itemsCarousel';

const ColetaSeletiva = () => {
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Coleta seletiva
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Carousel animation="slide" duration={1000} interval={5000} height={500}>
            {itemsCarousel.map((i) => (
              <CardWithAccordion key={i.id} title={i.title} subtitle={i.subtitle} image={i.image} text={i.text} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
export default ColetaSeletiva;
