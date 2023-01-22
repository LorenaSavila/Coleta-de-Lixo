import { Grid, List, ListItemButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import BaseModal from '../../shared/components/BaseModal';
import { bairros, diasSemana } from '../../shared/constants/constants';

export interface PainelBairrosProps {
  index: number;
  value: number;
  searchItem: string;
}

interface bairroSchema {
  id: number;
  nome: string;
  horario: string;
  dia: number;
}

const PainelBairros: React.FC<PainelBairrosProps> = ({ index, value, searchItem }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [selected, setSelected] = useState<bairroSchema>({ id: 99, nome: '', horario: '', dia: 0 });
  const [listToShow, setListToShow] = useState<Array<bairroSchema>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const allItems = Object.values(bairros);
  const selectedItems = allItems.at(value);
  const bairrosList = allItems.flat(1);

  const searchList = bairrosList.filter((i) => i.nome.toLowerCase().includes(searchItem.toLowerCase()));

  const handleClickItem = (item: bairroSchema) => {
    setSelected(item);
    setOpenModal(true);
  };

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
                <ListItemButton key={i.id} selected={selected.id === i.id} onClick={() => handleClickItem(i)}>
                  <Typography variant="h6">{i.nome}</Typography>
                </ListItemButton>
              ))}
          </List>
        )}
      </Grid>
      <BaseModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Informações"
        texts={[
          `Bairro: ${selected.nome}`,
          `Hórario da coleta: ${selected.horario}`,
          `Dias de coleta: ${diasSemana[selected.dia]}`,
        ]}
      />
    </Grid>
  );
};

export default PainelBairros;
