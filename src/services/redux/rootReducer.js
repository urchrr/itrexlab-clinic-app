import { combineReducers } from 'redux';
import userAuthReducer from './reducers/userAuthReducer';

const rootReducer = combineReducers({
  userAuthReducer,
});

export default rootReducer;
