import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background-color: ${props => (props.active ? 'var(--light-green)' : 'var(--white)')};
  transition: background-color 0.4s ease-in-out;

  h5 {
    color: var(--green);
  }
`;

type SearchButtonProps = {
  text: string;
  primary?: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
};

const SearchButton: React.FC<SearchButtonProps> = ({
  active,
  setActive,
  text,
  primary = false,
}) => {
  return (
    <StyledButton
      active={primary ? active : !active}
      onClick={() => setActive(!active)}
      className={`${(primary ? active : !active) ? 'btn' : 'btn-active'}`}>
      <h5>{text}</h5>
    </StyledButton>
  );
};

export default SearchButton;
