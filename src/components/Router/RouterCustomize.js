import { Home } from '../../pages/Home/Home';
import { ProductList } from '../../pages/ProductList/ProductList';
import { useRouterContext } from './GlobalProvider';
import LoadingView from '../commons/Loader/Loader';
import React, { useEffect, useState } from 'react';

export const CustomRouter = () => {
  const { route } = useRouterContext();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, [route]);

  const loadComponent = (Component) => {
    return React.createElement(
      React.Fragment,
      null,
      showSpinner && React.createElement(LoadingView, { color: '#065c5c' }),
      Component
    );
  };

  switch (route) {
    default:
    case '/':
      return loadComponent(React.createElement(Home, null));
    case '/products':
      return loadComponent(React.createElement(ProductList, null));
  }
};
