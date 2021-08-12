import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import {createStore} from "redux";
import allReducer from "./reducers/index";

let store=createStore(allReducer,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());

 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );

serviceWorker.unregister();


