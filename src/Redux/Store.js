import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import RootReducer from './Reducers/RootReducer';

const initialState = {};

const Store = createStore(
    RootReducer,
    initialState,
    compose (
        compose(applyMiddleware(thunk)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default Store