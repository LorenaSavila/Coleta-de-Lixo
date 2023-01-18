import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BaseLayout from './shared/components/BaseLayout';
import { homePage } from './shared/constants/constants';

const Home = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <Grid item>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          {homePage.title.toUpperCase()}
        </Typography>
      </Grid>

      <Grid item mb={6}>
        <Typography variant="h4" textAlign="center">
          {homePage.subtitle}
        </Typography>
      </Grid>

      <Grid container item direction="row" justifyContent="center" spacing={2}>
        <Grid item xs={8} lg={4} md={3}>
          <Button fullWidth variant="contained" color="primary" onClick={() => navigate('/coleta-de-lixo')}>
            Coleta de Lixo
          </Button>
        </Grid>
        <Grid item xs={8} lg={4} md={3}>
          <Button fullWidth variant="contained" color="secondary" onClick={() => navigate('/coleta-seletiva')}>
            Coleta Seletiva
          </Button>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

export default Home;
