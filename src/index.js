import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import logo from './logo.svg';
import './App.css'; 

import './css/bootstrap.css'; 
import './css/styles.css'; 
import { StateProvider } from './Components/StateProvider';
import Reducer,{initialState} from './Components/Reducer'

ReactDOM.render( 
<StateProvider initialState={initialState} Reducer={Reducer} >
<App />
</StateProvider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

