import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import CardWithAccordion from '../../shared/components/CardWithAccordion';
import Carousel from 'react-material-ui-carousel';
import { itemsCarousel } from './itemsCarousel';
import BackButton from '../../shared/components/BackButton';

const ColetaSeletiva = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item>
          <BackButton />
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Coleta seletiva
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          {matchesSM ? (
            <Grid item xs={12}>
              <Carousel animation="slide" duration={500} interval={5000}>
                {itemsCarousel.map((i) => (
                  <CardWithAccordion key={i.id} title={i.title} subtitle={i.subtitle} image={i.image} text={i.text} />
                ))}
              </Carousel>
            </Grid>
          ) : (
            <>
              {itemsCarousel.map((i) => (
                <Grid item sm={12} md={4} lg={2} sx={{ minHeight: 400 }}>
                  <CardWithAccordion key={i.id} title={i.title} subtitle={i.subtitle} image={i.image} text={i.text} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default ColetaSeletiva;
