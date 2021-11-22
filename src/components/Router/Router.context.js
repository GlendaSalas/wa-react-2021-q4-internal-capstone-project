/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const defaultState = {
  route: '/',
};

const RouterContext = createContext(defaultState);

export default RouterContext;

export const useRouterContext = () => useContext(RouterContext);

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(defaultState.route);
  const changeRoute = (route) => {
    setRoute(route);
  };
  return React.createElement(
    RouterContext.Provider,
    {
      value: {
        route,
        changeRoute,
      },
    },
    children
  );
};
