import { useState } from 'react';
import { Grid, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import PainelBairros from './PainelBairros';

const ListaBairros: React.FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: matchesSM ? 200 : 400, minWidth: matchesSM ? 300 : 600 }}
    >
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider' }}
          indicatorColor="primary"
        >
          <Tab label="A - E" value={0} />
          <Tab label="F - J" value={1} />
          <Tab label="L - R" value={2} />
          <Tab label="S - Z" value={3} />
        </Tabs>
      </Grid>

      <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
        <PainelBairros value={value} index={value} />
      </Grid>
    </Grid>
  );
};

export default ListaBairros;
