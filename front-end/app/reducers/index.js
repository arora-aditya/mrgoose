import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import slack from './slack';

const rootReducer = combineReducers({
  slack,
  routing,
});

export default rootReducer;
