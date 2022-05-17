import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger} from 'redux-logger';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons'; 

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<App />
</Provider> );
// registerServiceWorker();
