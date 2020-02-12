import {createStore} from 'redux';
import rootReducer from '../reducers';
import {devToolsEnhancer, composeWithDevTools} from 'remote-redux-devtools';
// const { composeWithDevTools } = require('redux-devtools-extension');
// import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';


export default store = createStore(rootReducer, composeWithDevTools());