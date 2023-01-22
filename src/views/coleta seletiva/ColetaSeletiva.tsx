import { Grid, useTheme, useMediaQuery } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import CardColetaSeletiva from '../../shared/components/CardColetaSeletiva';
import Carousel from 'react-material-ui-carousel';
import { itemsCarousel } from './itemsCarousel';
import BackButton from '../../shared/components/BackButton';
import SectionTitleWithTooltip from '../../shared/components/SectionTitleWithTooltip';
import { useState } from 'react';
import BaseModal from '../../shared/components/BaseModal';
import Typography from '@mui/material/Typography';

const ColetaSeletiva = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item>
          <BackButton />
        </Grid>
        <Grid container item>
          <SectionTitleWithTooltip title="Coleta seletiva" onClick={() => setOpenModal(true)} />
        </Grid>
        <Grid container item xs={12}>
          {matchesSM ? (
            <Grid item xs={12}>
              <Carousel animation="slide" duration={500} interval={5000}>
                {itemsCarousel.map((i) => (
                  <CardColetaSeletiva key={i.id} title={i.title} subtitle={i.subtitle} image={i.image} text={i.text} />
                ))}
              </Carousel>
            </Grid>
          ) : (
            <>
              {itemsCarousel.map((i) => (
                <Grid item sm={12} md={4} lg={2} sx={{ minHeight: 400 }}>
                  <CardColetaSeletiva key={i.id} title={i.title} subtitle={i.subtitle} image={i.image} text={i.text} />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Grid>
      <BaseModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Informações"
        texts={[
          <Typography variant="h6" fontWeight="bold">
            Guarde todos os materiais juntos em caixas ou sacos resistentes
          </Typography>,
          <Typography variant="h6" fontWeight="bold">
            A separação irá ocorrer no galpão de triagem
          </Typography>,
          <Typography variant="h6" fontWeight="bold">
            Você pode deixar no ecoponto na prefeitura ou ligar para agendar a coleta
          </Typography>,
        ]}
      />
    </BaseLayout>
  );
};

export default ColetaSeletiva;
