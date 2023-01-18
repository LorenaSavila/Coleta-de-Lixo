import { List, ListItemButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { bairros } from '../../shared/constants/constants';

interface PainelBairrosProps {
  index: number;
  value: number;
}

const PainelBairros: React.FC<PainelBairrosProps> = ({ index, value }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const items = Object.values(bairros).at(value);

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <List sx={{ overflow: 'auto', maxHeight: matchesSM ? 200 : '40%', width: '100%' }}>
          {items &&
            items.map((i) => (
              <ListItemButton key={i}>
                <Typography variant="body1">{i}</Typography>
              </ListItemButton>
            ))}
        </List>
      )}
    </div>
  );
};

export default PainelBairros;
