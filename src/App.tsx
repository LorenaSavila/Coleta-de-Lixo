import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}
      margin={0}
    >
      <Grid item>
        <Typography variant="h3">Diamantina cuida do seu lixo</Typography>
      </Grid>
      <Grid item lg={12} xs={6}>
        <Button variant="contained" color="success" onClick={() => navigate('/coleta-de-lixo')}>
          Coleta de Lixo
        </Button>
      </Grid>
      <Grid item lg={12} xs={6}>
        <Button variant="contained" color="info" onClick={() => navigate('/coleta-seletiva')}>
          Coleta Seletiva
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
