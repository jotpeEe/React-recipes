import ListItem from '@mui/material/ListItem';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';

const StyledListItem = styled(ListItem)`
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: center;

  .MuiListItemText-multiline {
    margin-top: 0px;
  }

  .MuiListItemText-primary {
    font-size: var(--fs-xs);
    font-family: var(--font-oswald);
  }

  .MuiListItemText-secondary {
    font-size: var(--fs-xxs);
  }
`;

const MListItemText = (props: ListItemTextProps) => {
  const { primary, secondary } = props;
  return (
    <Paper>
      <StyledListItem>
        <ListItemText primary={primary} secondary={secondary} />
      </StyledListItem>
    </Paper>
  );
};

export default MListItemText;
