import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean }>`
  width: 100px;
  padding: 10px 15px;
  border: 1px solid ${props => (props.primary ? 'var(--light-green)' : 'var(--light-green)')};
  border-radius: 5px;
  background-color: ${props => (props.primary ? 'var(--light-green)' : 'var(--white)')};

  h5 {
    color: ${props => (props.primary ? 'var(--green)' : 'var(--light-green)')};
  }
`;

type ButtonProps = {
  text: string;
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ primary, text }) => {
  return (
    <StyledButton primary={primary}>
      <h5>{text}</h5>
    </StyledButton>
  );
};

export default Button;
