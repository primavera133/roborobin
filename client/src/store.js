import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import debounce from 'lodash.throttle'
import localforage from 'localforage'

let store = null

export const initStore = () => {
  return new Promise((resolve, reject) => {
    const composeEnhancers =
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

    const enhancer = composeEnhancers(
      applyMiddleware(thunkMiddleware)
      // other store enhancers if any
    )

    if (!store) {
      localforage.getItem('state')
        .then(persistedState => {
          store = persistedState
            ? createStore(
              rootReducer,
              persistedState,
              enhancer
            )
            : createStore(
              rootReducer,
              enhancer
            )

          store.subscribe(debounce(() => {
            const state = store.getState()
            localforage.setItem('state', state)
              .catch(console.error)
          }, 500, { leading: false }))

          if (module.hot) {
            module.hot.accept('./reducers', () => {
              const nextRootReducer = require('./reducers').default
              store.replaceReducer(nextRootReducer)
            })
          }

          resolve(store)
        })

        .catch(reject)
    }
  })
}
