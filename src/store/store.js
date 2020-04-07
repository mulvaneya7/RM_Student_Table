import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from 'redux-thunk'; 
import tableReducer from '../store/tableReducer';


const rootReducer = combineReducers({
  form: formReducer,
  table: tableReducer
});

export default createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
