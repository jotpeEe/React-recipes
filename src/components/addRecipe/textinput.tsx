import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  setDescription: (arg: string[]) => void;
  recipe: {
    ingList?: string[];
    desc?: string[];
  };
  step: number;
}

const TextInput: React.FC<TextInputProps> = ({ setDescription, step, recipe }) => {
  const [input, setInput] = useState<string[]>([]);

  const addItem = (idx: number, text: string) => {
    let newArray: string[] = Array.from(input);
    if (!text) return;
    if (!newArray[idx]) newArray.push(text);
    newArray.splice(idx, 1, text);
    setInput(newArray);
    setDescription(newArray);
  };

  useEffect(() => {
    if (recipe.desc) setInput(recipe.desc);
  }, [recipe]);
  return (
    <>
      <TextField
        id="standard-multiline-static"
        label="Step 1"
        multiline
        rows={4}
        variant="standard"
        defaultValue={input[0]}
        onChange={e => addItem(0, e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        label="Step 2"
        multiline
        rows={4}
        variant="standard"
        defaultValue={input[1]}
        onChange={e => addItem(1, e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        label="Step 3"
        multiline
        rows={4}
        variant="standard"
        defaultValue={input[2]}
        onChange={e => addItem(2, e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        label="Step 4"
        multiline
        rows={4}
        variant="standard"
        defaultValue={input[3]}
        onChange={e => addItem(3, e.target.value)}
      />
    </>
  );
};

export default TextInput;
