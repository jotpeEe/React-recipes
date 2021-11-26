import React from 'react';
import styled from 'styled-components';

import IngEdit from './ingredientsEdit';

const StyledView = styled.div`
  grid-column: span 11;
  grid-row: span 11;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: var(--white);
  color: var(--black);

  > div {
    border: 1px solid purple;
    padding: 50px;
  }

  .ingredients {
  }

  .to-do {
    grid-column: span 3;
    grid-row-start: 4;
    grid-row-end: 7;
  }

  .list {
    grid-column: span 3;
    grid-row: span 6;
  }
`;

const Main: React.FC = () => {
  return (
    <StyledView>
      <IngEdit />
      <div className="to-do"></div>
      <div className="list"></div>
    </StyledView>
  );
};

export default Main;
