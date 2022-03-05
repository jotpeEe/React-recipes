import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
  width: 70px;

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`;

const MIconButton = (props: any) => {
  const { onClick } = props;
  return (
    <Tooltip title="Add">
      <StyledIconButton onClick={onClick} aria-label="add" size="small">
        <AddIcon />
      </StyledIconButton>
    </Tooltip>
  );
};

export default MIconButton;
