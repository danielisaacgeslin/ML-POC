import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LazyRoute from 'react-lazy-route';
import { store } from './state-mgmt/config';
import HeaderContainer from './layouts/header/HeaderContainer';

const List = () => import('./layouts/list/ListContainer');
const Detail = () => import('./layouts/detail/DetailContainer');

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <Switch>
              <Route exact={true} path="/" render={() => ''} />
              <LazyRoute exact={true} path="/items" render={List} />
              <LazyRoute exact={true} path="/items/:id" render={Detail} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
