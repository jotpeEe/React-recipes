import React from 'react';
import styled from 'styled-components';
import Icon from '../../icons/icon';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  height: 25vh;
  background-color: var(--green);

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    min-width: 800px;
    margin: 0 auto;

    & > *:last-of-type {
      margin-right: 0;
    }

    @media (max-width: 860px) {
      min-width: 0;
      width: 100%;
    }
  }

  .title-container {
    grid-row: span 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    min-width: 800px;

    @media (max-width: 800px) {
      min-width: 0px;
      width: 100%;
    }

    & > .title > h3 {
      color: white;
    }

    & > .title > h5 {
      color: #357f73;
    }
  }
`;

const Link = styled.a`
  opacity: 0.8;
  padding: 15px;
  margin: 0 20px;

  &:hover {
    opacity: 1;
  }

  & > * {
    color: white;
  }
`;

const Text = styled.h5`
  position: relative;
  margin: 0px;
  color: white;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  ${Link}:hover &, ${Link}:hover &::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link href="/" className="link">
          <Text>RECIPES</Text>
        </Link>
        <Link href="/" className="link">
          <Text>BLOG</Text>
        </Link>
        <Link href="/" className="link">
          <Icon name="LogIn" />
        </Link>
      </nav>
      <div className="title-container">
        <div className="title">
          <h5>WELCOME</h5>
          <h3>Maciej Klos</h3>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
