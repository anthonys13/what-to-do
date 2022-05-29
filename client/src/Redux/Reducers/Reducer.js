import { combineReducers } from 'redux';
import ListsReducer from './ListsReducer'

const rootReducer = combineReducers({
    Lists: ListsReducer,
});

export default rootReducer;