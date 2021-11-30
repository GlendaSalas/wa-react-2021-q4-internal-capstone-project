import { useRouterContext } from '../../components/Router/GlobalProvider';

export const useNavigation = () => {
  const { route, changeRoute } = useRouterContext();
  const navigateTo = (route) => {
    if (changeRoute) {
      changeRoute(route);
    }
  };
  return {
    navigateTo,
    route,
  };
};
