import { Button, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from '/background.jpg';
import { homePage } from './shared/constants/constants';

function App() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      height="100%"
      width="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPositionY: 'bottom',
        backgroundSize: matchesSM ? 'contain' : 'cover',
        backgroundColor: '#53b8e4',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid item xs={6} lg={6} width={matchesSM ? '90%' : '40%'}>
        <Paper elevation={6} color="#ffff" sx={{ borderRadius: 5, p: 4 }}>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
