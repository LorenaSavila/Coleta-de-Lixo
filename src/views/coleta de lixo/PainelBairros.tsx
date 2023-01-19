import { Grid, List, ListItemButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { bairros } from '../../shared/constants/constants';

export interface PainelBairrosProps {
  index: number;
  value: number;
  searchItem: string;
}

const PainelBairros: React.FC<PainelBairrosProps> = ({ index, value, searchItem }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string>('');
  const [listToShow, setListToShow] = useState<Array<string>>([]);
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const allItems = Object.values(bairros);
  const selectedItems = allItems.at(value);
  const bairrosList = allItems.flat(1);

  const searchList = bairrosList.filter((i) => i.toLowerCase().includes(searchItem.toLowerCase()));

  useEffect(() => {
    if (!!selected) return window.alert(selected);
  }, [selected]);

  useEffect(() => {
    if (searchItem.length === 0) {
      setListToShow(selectedItems!);

      return;
    }

    setListToShow(searchList);
  }, [searchItem, value]);

  return (
    <Grid
      container
      role="tabpanel"
      hidden={value !== index}
      alignItems="center"
      justifyContent="center"
      sx={{ overflow: 'auto' }}
      maxHeight={matchesSM ? 240 : 300}
    >
      <Grid item xs={12} lg={12}>
        {value === index && (
          <List>
            {listToShow &&
              listToShow.map((i) => (
                <ListItemButton key={i} selected={selected === i} onClick={() => setSelected(i)}>
                  <Typography variant="h6">{i}</Typography>
                </ListItemButton>
              ))}
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default PainelBairros;
