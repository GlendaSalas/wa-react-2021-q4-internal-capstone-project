import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Cart } from '../../pages/Cart/Cart';
import { Checkout } from '../../pages/Checkout/Checkout';
import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/404/404';
import { Search } from '../../pages/Search/Search';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import ProductList from '../../pages/ProductList/ProductList';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/product/:productid">
          <ProductDetails />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
