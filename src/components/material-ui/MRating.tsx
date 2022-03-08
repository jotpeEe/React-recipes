import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)`
  font-size: 0.6rem;
  color: var(--green);
`;

type MRatingProps = {
  name?: string | undefined;
  value?: number | null | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  readOnly?: boolean | undefined;
};

const MRating: React.FC<MRatingProps> = ({ name, value, size, readOnly }) => {
  return <StyledRating name={name} value={value} size={size} readOnly={readOnly} />;
};

export default MRating;
