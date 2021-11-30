/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const defaultState = {
  route: '/',
};

const GlobalProvider = createContext(defaultState);

export default GlobalProvider;

export const useRouterContext = () => useContext(GlobalProvider);

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(defaultState.route);
  const changeRoute = (route) => {
    setRoute(route);
  };
  return React.createElement(
    GlobalProvider.Provider,
    {
      value: {
        route,
        changeRoute,
      },
    },
    children
  );
};
