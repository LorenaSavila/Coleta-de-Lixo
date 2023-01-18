import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import background from '/background.jpg';

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
