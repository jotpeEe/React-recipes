import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import sr from '../../styles/sr';

const StyledAddInserts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 800px;
`;

interface FinishProps {
  setStep: (arg: number) => void;
  step: number;
}

const Finish: React.FC<FinishProps> = ({ setStep }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    sr(targetRef.current);
  }, []);

  return (
    <StyledAddInserts ref={targetRef}>
      <div className="add-nav">
        <div className="step-info">
          <span className="step-number">3</span>
          <div className="text-cointainer">
            <h2>Preview recipe</h2>
            <p>Please check details then create recipe</p>
          </div>
        </div>
        <div className="button">
          <Button onClick={() => setStep(0)} variant="contained">
            CREATE
          </Button>
        </div>
      </div>
      <div className="inserts"></div>
    </StyledAddInserts>
  );
};

export default Finish;
