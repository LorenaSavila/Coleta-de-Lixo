import { Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import ListaBairros from './ListaBairros';
import { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BaseModal from '../../shared/components/BaseModal';
import { modalInfos } from '../../shared/constants/constants';

const ColetaDeLixo = () => {
  const [search, setSearch] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid container item alignItems="center">
          <Grid item>
            <Typography variant="h4" fontWeight="bold" textAlign="center">
              Coleta de lixo
            </Typography>
          </Grid>
          <Grid item sx={{ pb: 1 }}>
            <Tooltip title="Informações importantes">
              <IconButton onClick={() => setOpenModal(true)}>
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container item spacing={2} xs={12}>
          <Grid item xs={12} lg={12}>
            <Typography variant="h5" fontWeight="bold">
              Pesquisar por bairro:
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              variant="outlined"
              placeholder="Bairro"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h5" fontWeight="bold">
              Consultar pelas iniciais:
            </Typography>
          </Grid>
          <Grid item alignSelf="center" xs={12}>
            <ListaBairros searchItem={search} setSearchItem={setSearch} />
          </Grid>
          <Grid item>
            <BaseModal
              open={openModal}
              onClose={() => setOpenModal(false)}
              title="Informações importantes: "
              texts={modalInfos}
            />
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
export default ColetaDeLixo;
