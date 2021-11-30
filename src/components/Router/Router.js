import { CustomRouter } from './RouterCustomize';
import { RouterProvider } from './GlobalProvider';

export const Router = () => {
  return (
    <RouterProvider>
      <CustomRouter />
    </RouterProvider>
  );
};
