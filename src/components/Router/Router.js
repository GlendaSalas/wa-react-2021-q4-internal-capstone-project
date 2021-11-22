import { CustomRouter } from './RouterCustomize';
import { RouterProvider } from './Router.context';

export const Router = () => {
  return (
    <RouterProvider>
      <CustomRouter />
    </RouterProvider>
  );
};
