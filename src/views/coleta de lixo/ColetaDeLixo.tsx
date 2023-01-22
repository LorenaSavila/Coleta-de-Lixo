import { Grid, TextField, Typography } from '@mui/material';
import BaseLayout from '../../shared/components/BaseLayout';
import ListaBairros from './ListaBairros';
import { useState } from 'react';
import BaseModal from '../../shared/components/BaseModal';
import { modalInfos } from '../../shared/constants/constants';
import BackButton from '../../shared/components/BackButton';
import SectionTitleWithTooltip from '../../shared/components/SectionTitleWithTooltip';

const ColetaDeLixo = () => {
  const [search, setSearch] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <Grid item>
          <BackButton />
        </Grid>
        <Grid container item>
          <SectionTitleWithTooltip title="Coleta de lixo" onClick={() => setOpenModal(true)} />
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
            <ListaBairros searchItem={search} />
          </Grid>
        </Grid>
      </Grid>
      <BaseModal open={openModal} onClose={() => setOpenModal(false)} title="Importante" texts={modalInfos} />
    </BaseLayout>
  );
};

export default ColetaDeLixo;
