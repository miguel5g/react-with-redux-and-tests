import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { render } from '@testing-library/react';

import rootReducer from '../../redux/reducers';

function renderWithRouterAndRedux(
  component,
  {
    location = '/',
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    history = createMemoryHistory({ initialEntries: [location] }),
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>{component}</Provider>
      </Router>
    ),
    history,
    store,
  };
}

export default renderWithRouterAndRedux;
