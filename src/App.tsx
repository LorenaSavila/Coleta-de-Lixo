import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from '/background.jpg';

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
      margin={0}
      spacing={2}
    >
      <Grid item>
        <Typography variant="h3">Diamantina cuida do seu lixo</Typography>
      </Grid>

      <Grid item mb={6}>
        <Typography variant="h4">Cuide você também!</Typography>
      </Grid>

      <Grid container item direction="row" justifyContent="center" spacing={4}>
        <Grid item xs={8} lg={2} md={3}>
          <Button fullWidth variant="contained" color="primary" onClick={() => navigate('/coleta-de-lixo')}>
            Coleta de Lixo
          </Button>
        </Grid>
        <Grid item xs={8} lg={2} md={3}>
          <Button fullWidth variant="contained" color="secondary" onClick={() => navigate('/coleta-seletiva')}>
            Coleta Seletiva
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
