import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router-3'
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux'
import SellersContainer from './Containers/SellersContainer';
import myReducer from './Reducers/myReducer';
import sellers from './Reducers/sellersReducer';

const middleware = routerMiddleware(browserHistory);

const store = createStore(combineReducers({
    routing: routerReducer,
    myReducer,
    sellers
}), applyMiddleware(middleware));
const history = syncHistoryWithStore(browserHistory, store);

/*{
    routing: {}
    myReducer: {test: 1}
}*/


const TestComponent = ()=>(<div>
    Test page
    <Link to={"/sellers"}>Go to sellers</Link>
</div>);
const NotFoundComponent = ()=>(<div>Not found</div>);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={TestComponent}/>
            <Route path={"sellers"} component={SellersContainer} />
          </Route>
          <Route path="*" component={NotFoundComponent} />
      </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
