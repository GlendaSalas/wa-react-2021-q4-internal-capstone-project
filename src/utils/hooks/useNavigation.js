import { useHistory } from 'react-router';

export const useNavigation = () => {
  const history = useHistory();

  const navigateTo = (route) => {
    history.push(route);
  };

  return {
    navigateTo,
  };
};
