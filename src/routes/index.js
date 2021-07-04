import { Switch, Route } from 'react-router-dom';
import Products from '../pages';
import Cart from '../pages/cart';
import { ROUTES_NAMES } from './routesNames';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES_NAMES.HOME}>
        <Products />
      </Route>
      <Route path={ROUTES_NAMES.CART}>
        <Cart />
      </Route>
    </Switch>
  );
}
