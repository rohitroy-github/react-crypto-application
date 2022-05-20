import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './app/store';

import 'antd/dist/antd.css'; //Imports all the main CSS files 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* So now all the variables of <App> component will be able to use the store data, variables */}
      <Provider store={store}> 
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
