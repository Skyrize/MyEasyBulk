import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers/Reducer';

const Store = createStore(appReducers, applyMiddleware(thunk));
export type RootState = ReturnType<typeof Store.getState>;
export default Store;