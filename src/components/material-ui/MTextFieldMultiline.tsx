import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  padding: var(--p-recipe);

  .MuiInputLabel-root {
    padding: var(--p-recipe);
  }
`;

const MTextFieldMultiline = (props: any) => {
  const { onChange, placeholder, label, defaultValue } = props;
  return (
    <StyledTextField
      id="standard-multiline-static"
      multiline
      rows={4}
      variant="standard"
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default MTextFieldMultiline;
