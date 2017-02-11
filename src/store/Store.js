import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

let finalCreateStore = compose(
    DevTools.instrument(),
)(createStore);

export default function Store(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
      if (module.hot) {
             module.hot.accept('../reducers', () => {
             const nextRootReducer = require('../reducers')
             store.replaceReducer(nextRootReducer)
            })
      }
     return store
}
