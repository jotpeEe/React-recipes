import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  grid-row: span 11;
  display: flex;
  height: 100%;
  border: 1px solid var(--white);
  flex-direction: column;
  justify-content: flex-start;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <p>Menu</p>
    </StyledMenu>
  );
};

export default Menu;
