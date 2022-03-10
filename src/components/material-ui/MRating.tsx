import React from 'react';
import styled from 'styled-components';
import Rating, { RatingProps } from '@mui/material/Rating';

const StyledRating = styled(Rating)`
  color: var(--green);
`;

const MRating: React.FC<RatingProps> = ({ name, value, size, readOnly }) => {
  return <StyledRating name={name} value={value} size={size} readOnly={readOnly} />;
};

export default MRating;
