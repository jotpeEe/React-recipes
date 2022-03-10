import styled from 'styled-components';
import ListItemText from '../../material-ui/MListItemText';
import Paper from '@mui/material/Paper';

const StyledPaper = styled(Paper)`
  margin: 50px auto;
  width: 600px;

  .recipe-grid {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding: 35px 30px;
    height: 100%;
    border: 1px solid #dedede;

    .title {
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #dedede;

      h2 {
        margin: 0px;
      }
    }

    .title,
    .ingredients {
      height: 100%;
    }

    .ingredients {
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: 5px;
      margin: 0px;
      width: auto;
      border-bottom: 1px solid #dedede;
    }

    & > div,
    & > ul {
      padding: 25px 0 25px 0;
    }
  }
`;

export type RecipeProps = {
  title: string;
  ingredientsList: object[];
  description: string[];
};

const Recipe: React.FC<RecipeProps> = ({ title, ingredientsList, description }) => {
  return (
    <StyledPaper elevation={5}>
      <div className="recipe-grid">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <ul className="ingredients">
          {ingredientsList &&
            ingredientsList.map(
              (item: { id?: number; name?: string; quantity?: string }, idx: number) => (
                <ListItemText key={idx} primary={item.name} secondary={item.quantity} />
              ),
            )}
        </ul>
        {description && description.map((item: string, idx: number) => <p key={idx}>{item}</p>)}
      </div>
    </StyledPaper>
  );
};

export default Recipe;
