import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BaseLayout from './shared/components/BaseLayout';
import { homePage } from './shared/constants/constants';

const Home = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <Grid container spacing={6}>
        <Grid container item justifyContent="center">
          <Grid item xs>
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              {homePage.title.toUpperCase()}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center">
              {homePage.subtitle}
            </Typography>
          </Grid>
        </Grid>

        <Grid container item direction="row" justifyContent="center" spacing={2}>
          <Grid item xs={8} lg={4} md={3}>
            <Button fullWidth variant="contained" color="primary" onClick={() => navigate('/consulta-bairro')}>
              Coleta de Lixo
            </Button>
          </Grid>
          <Grid item xs={8} lg={4} md={3}>
            <Button fullWidth variant="contained" color="secondary" onClick={() => navigate('/coleta-seletiva')}>
              Coleta Seletiva
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;
