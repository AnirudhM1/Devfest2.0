import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Hooks/AuthProvider';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Switch>
            <AuthProvider>
               <Route path="/app">
                  <App />
               </Route>
            </AuthProvider>
         </Switch>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
