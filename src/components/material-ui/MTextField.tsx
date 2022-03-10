import TextField, { TextFieldProps } from '@mui/material/TextField';

const MTextField = (props: TextFieldProps) => {
  const { onChange, label, placeholder } = props;
  return (
    <TextField
      onChange={onChange}
      id="standard-basic"
      label={label}
      variant="standard"
      placeholder={placeholder}
      fullWidth
    />
  );
};

export default MTextField;
