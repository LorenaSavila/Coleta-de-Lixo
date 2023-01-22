import { Button, Grid, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CallIcon from '@mui/icons-material/Call';
import { callTel, telefone } from '../constants/constants';

export interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  texts: Array<string | JSX.Element>;
}

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, title, texts }) => {
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal open={open} onClose={onClose}>
      <Grid
        container
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: matchesSM ? '95%' : '70%',
          bgcolor: 'background.paper',
          height: matchesSM ? '60%' : '30%',
          borderRadius: 4,
          p: 2,
        }}
        justifyContent="center"
      >
        <Grid item sx={{ bottom: matchesSM ? '87%' : '83%', right: '0%', position: 'absolute' }}>
          <IconButton onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            {title}
          </Typography>
        </Grid>
        {texts.map((i, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6">{i}</Typography>
          </Grid>
        ))}
        <Grid item xs={8} alignSelf="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<CallIcon fontSize="large" />}
            size="small"
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'bold' }}
            onClick={() => window.open(callTel)}
            fullWidth
          >
            Telefone: {telefone}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default BaseModal;
