import React from 'react';
import ReactDOM from 'react-dom';
import PublicUniverse from './000 Public Universe/main';
import PublicNav from './000 Public Universe/nav';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PublicNav />
    <PublicUniverse />
  </React.StrictMode>,
  document.getElementById('root')
);