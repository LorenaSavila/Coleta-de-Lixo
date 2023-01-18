import { Grid, TextField, Typography } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import ListaBairros from './ListaBairros';

const ColetaDeLixo = () => {
  return (
    <BaseLayout>
      <Grid item mb={2}>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Coleta de lixo
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Typography variant="h5" fontWeight="bold">
            Pesquisar por bairro:
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField variant="outlined" placeholder="Bairro" fullWidth />
        </Grid>
        <Grid item lg={12} mb={2}>
          <Typography variant="h5" fontWeight="bold">
            Consultar pelas inicias:
          </Typography>
        </Grid>
        <Grid item>
          <ListaBairros />
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
export default ColetaDeLixo;
