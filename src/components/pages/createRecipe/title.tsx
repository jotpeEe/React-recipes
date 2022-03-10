import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;

    .step-number {
      display: flex;
      height: 70px;
      width: 70px;
      font-size: 46px;
      color: var(--light-green);
      justify-content: center;
      align-items: center;
    }

    .button {
      padding-right: var(--p-recipe-right);
    }
  }
`;

const Title: React.FC<TitleProps> = ({ step, title, subtitle, href, onClick, btnText }) => {
  return (
    <StyledTitle>
      <div className="title">
        <span className="step-number">{step + 1}</span>
        <div className="text-cointainer">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="button">
        <Link to={href}>
          <Button onClick={onClick} variant="contained">
            {btnText}
          </Button>
        </Link>
      </div>
    </StyledTitle>
  );
};

export default Title;

type TitleProps = {
  step: number;
  title: string;
  subtitle: string;
  href: string;
  onClick: () => void;
  btnText: string;
};
