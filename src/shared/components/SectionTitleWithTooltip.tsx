import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface SectionTitleWithTooltipProps {
  title: string;
  onClick: () => void;
}

const SectionTitleWithTooltip: React.FC<SectionTitleWithTooltipProps> = ({ title, onClick }) => {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Informações importantes" arrow placement="top">
          <IconButton onClick={onClick}>
            <InfoOutlinedIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default SectionTitleWithTooltip;
