import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={12} md={2}>
        <IconButton onClick={() => navigate('/')} edge="start" color="primary">
          <ArrowBackIcon fontSize="small" />
          <Typography variant="h5" fontWeight="bold">
            Voltar
          </Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default BackButton;
