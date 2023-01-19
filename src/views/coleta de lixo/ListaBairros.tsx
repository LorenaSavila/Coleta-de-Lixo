import { useState } from 'react';
import { Grid, Tab, Tabs } from '@mui/material';
import PainelBairros from './PainelBairros';

export interface ListaBairrosProps {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}
const ListaBairros: React.FC<ListaBairrosProps> = ({ searchItem, setSearchItem }) => {
  const [value, setValue] = useState(0);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Tabs
          orientation="horizontal"
          variant="fullWidth"
          value={value}
          onChange={(e, value) => setValue(value)}
          indicatorColor="primary"
        >
          <Tab label="A - E" value={0} />
          <Tab label="F - J" value={1} />
          <Tab label="L - R" value={2} />
          <Tab label="S - Z" value={3} />
        </Tabs>
      </Grid>

      <Grid item xs={12}>
        <PainelBairros value={value} index={value} searchItem={searchItem} />
      </Grid>
    </Grid>
  );
};

export default ListaBairros;
