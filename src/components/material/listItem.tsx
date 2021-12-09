import React from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
  grid-column-start: 1;
  width: 100%;
  border-right: 1px solid var(--gray);
  border-bottom: 6px solid var(--light-green);

  :nth-of-type(even) {
    grid-column-start: 2;
  }
`;

const listItem = (props: any) => {
  const { onClick, item } = props;
  return (
    <StyledListItem
      secondaryAction={
        <Tooltip title="delete">
          <IconButton onClick={onClick} edge="end">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary={item.name} secondary={item.quantity} />
    </StyledListItem>
  );
};

export default listItem;
