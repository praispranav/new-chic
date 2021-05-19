import AcupuntureReducer from "./data/AcupunctureReducer"
import { combineReducers } from 'redux';

const reducers = combineReducers({
  data : AcupuntureReducer
});

export default reducers;
