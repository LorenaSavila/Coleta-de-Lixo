import { Grid, List, ListItemButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { bairros } from '../../shared/constants/constants';

interface PainelBairrosProps {
  index: number;
  value: number;
}

const PainelBairros: React.FC<PainelBairrosProps> = ({ index, value }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string>('');
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const items = Object.values(bairros).at(value);

  useEffect(() => {
    if (!!selected) return window.alert(selected);

    return;
  }, [selected]);

  return (
    <Grid
      container
      role="tabpanel"
      hidden={value !== index}
      alignItems="center"
      justifyContent="center"
      sx={{ overflow: 'auto', maxHeight: matchesSM ? 200 : 300, maxWidth: matchesSM ? 400 : 1200 }}
    >
      <Grid item xs={12} lg={12}>
        {value === index && (
          <List>
            {items &&
              items.map((i) => (
                <ListItemButton key={i} selected={selected === i} onClick={() => setSelected(i)}>
                  <Typography variant="body1">{i}</Typography>
                </ListItemButton>
              ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default PainelBairros;
