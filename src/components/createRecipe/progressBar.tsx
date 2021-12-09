import styled from 'styled-components';

const StyledProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--gray);
  margin-top: auto;
  width: 100%;
  height: 10vh;
  background-color: var(--dark-white2);

  .bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    z-index: 10;

    @media (max-width: 640px) {
      width: 150px;
    }
  }

  .bar-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 335px;
    padding-top: 10px;

    @media (max-width: 640px) {
      min-width: 200px;
      font-size: var(--fs-xs);
      padding-top: 0px;
    }
  }
`;

const ListItem = styled.li<{ active: boolean }>`
  background-color: ${props => (props.active ? 'var(--light-green)' : 'var(--white)')};
  border: 2px solid var(--gray);
  border-radius: 100px;
  min-width: 12px;
  height: 12px;
  position: relative;
`;

const Divider = styled.div<{ active: boolean }>`
  width: 100%;
  margin: 0px 7px;
  position: relative;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    background-color: ${props => (props.active ? 'var(--light-green)' : 'var(--gray)')};
    height: 2px;
    z-index: 0;
    width: 100%;
  }
`;

const SliderText = styled.p<{ active: boolean }>`
  color: ${props => (props.active ? 'var(--black)' : 'var(--gray)')};
  padding: 0px;
  margin: 0;
`;

const progressBar = (props: any) => {
  const { step } = props;
  return (
    <StyledProgressBar>
      <ul className="bar">
        <ListItem active={true} />
        <Divider active={step === 0 ? false : true} />
        <ListItem active={step === 0 ? false : step === 1 ? true : true} />
        <Divider active={step === 0 ? false : step === 1 ? false : true} />
        <ListItem active={step === 0 ? false : step === 1 ? false : true} />
      </ul>
      <div className="bar-text">
        <SliderText active={true}>Add Title</SliderText>
        <SliderText active={step === 0 ? false : step === 1 ? true : true}>How to make</SliderText>
        <SliderText active={step === 0 ? false : step === 1 ? false : true}>Preview</SliderText>
      </div>
    </StyledProgressBar>
  );
};

export default progressBar;
