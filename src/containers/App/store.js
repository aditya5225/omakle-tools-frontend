
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import downloadYtThumbReducer from '../../redux/reducers/downloadYtThumbReducer';
import webToolsDataReducer from '../../redux/reducers/webToolsDataReducer';


const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  downloadYtThumbReducer,
  webToolsDataReducer,
});



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
