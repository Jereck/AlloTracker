import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const store = createStore(reducer)

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

defineCustomElements(window);