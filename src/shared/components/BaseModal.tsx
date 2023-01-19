import { Grid, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';

export interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  texts: Array<string>;
}

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, title, texts }) => {
  const x = '';
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal open={open} onClose={onClose}>
      <Grid
        container
        width="30vw"
        height="40vh"
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: matchesSM ? '90%' : '60%',
          bgcolor: 'background.paper',
          borderRadius: 4,
          border: 'thin',
          p: 4,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5">{title}</Typography>
        </Grid>
        {texts.map((i) => (
          <Grid item xs={12}>
            <Typography variant="body1">{i}</Typography>
          </Grid>
        ))}
      </Grid>
    </Modal>
  );
};

export default BaseModal;
