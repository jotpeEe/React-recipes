import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { useRegisterMutation } from 'generated/graphql';

interface LoginProps {}

const StyledLogin = styled.div`
  height: 75vh;
  max-width: var(--section-width);
  margin: 0 auto;

  .container {
    height: 100%;
    width: 100%;
    padding: 10%;
  }
`;

const Login: React.FC<LoginProps> = () => {
  const [options, setOptions] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<{ field?: string; message?: string }>({});

  const [, register] = useRegisterMutation();

  return (
    <StyledLogin>
      <div className="container">
        <div className="log-in">
          <form
            onSubmit={async e => {
              e.preventDefault();
              const response = await register(options);
              if (response.data?.register.errors) {
                if (isError !== true) {
                  setIsError(!isError);
                  const { field, message } = response.data.register.errors[0];
                  setError({ field: field, message: message });
                }
              }
            }}>
            <TextField
              error={isError}
              InputLabelProps={{
                disableAnimation: true,
                shrink: true,
              }}
              label={'Login'}
              onChange={e => {
                if (isError === true) {
                  setIsError(!isError);
                  setError({});
                }
                setOptions({ username: e.target.value, password: options.password });
              }}
              helperText={error.field === 'username' ? `${error.message}` : ''}
              variant="standard"
            />
            <TextField
              error={isError}
              InputLabelProps={{
                disableAnimation: true,
                shrink: true,
              }}
              label="Password"
              onChange={e => {
                if (isError === true) {
                  setIsError(!isError);
                  setError({});
                }
                setOptions({ username: options.username, password: e.target.value });
              }}
              type="password"
              variant="standard"
              helperText={error.field === 'password' ? `${error.message}` : ''}
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </div>
        <div className="sign-in"></div>
      </div>
    </StyledLogin>
  );
};

export default Login;
