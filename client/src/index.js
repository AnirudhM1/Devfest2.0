import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './components/Project';
import Schedule from './components/Schedule';
import Expense from './components/Expense';
import Message from './components/Message';
// import AuthProvider from './Hooks/AuthProvider';
ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Switch>
            <Route path="/app">
               <App />
            </Route>
            <Route path="/project">
               <Project />
            </Route>
            <Route path="/schedule">
               <Schedule />
            </Route>
            <Route path="/expense">
               <Expense />
            </Route>
            <Route path="/message">
               <Message />
            </Route>
         </Switch>
      </Router>
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
