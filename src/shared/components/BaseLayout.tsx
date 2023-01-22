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
      direction="row"
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
      <Grid container item xs={11}>
        <Paper
          elevation={6}
          color="#ffff"
          sx={{
            borderRadius: 5,
            p: 4,
            overflowX: 'hidden',
          }}
          component={Grid}
          item
          xs
        >
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
