import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';
import {
  Router,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);