import { Switch, Route } from 'react-router-dom';
import Products from '../pages';
import Cart from '../pages/cart';
import { CART_PAGE, HOME_PAGE } from './routeNames';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={HOME_PAGE}>
        <Products />
      </Route>
      <Route path={CART_PAGE}>
        <Cart />
      </Route>
    </Switch>
  );
}
