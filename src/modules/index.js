import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter.js';

export default combineReducers({
    routing: routerReducer,
    counter
});
