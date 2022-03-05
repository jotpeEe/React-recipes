import IconLogIn from './login';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Resume':
      return <span>Resume</span>;
    case 'LogIn':
      return <IconLogIn />;
    default:
      return <IconLogIn />;
  }
};

export default Icon;
