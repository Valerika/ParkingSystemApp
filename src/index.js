import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './index.css';
import Store from './store/Store';
import DevTools from './containers/DevTools';

const store = Store();

render(
  <Provider store={store}>
    <div className='app'>
      <App/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root')
)
