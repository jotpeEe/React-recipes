import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: right;
  font-family: var(--font-oswald);

  .MuiListItemText-multiline {
    margin-top: 0px;
  }

  .MuiListItemText-primary {
    font-size: var(--fs-xs);
  }

  .MuiListItemText-secondary {
    font-size: var(--fs-xxs);
  }
`;

const listItemText = (props: any) => {
  const { primary, secondary } = props;
  return (
    <StyledListItem>
      <ListItemText primary={primary} secondary={secondary} />
    </StyledListItem>
  );
};

export default listItemText;
