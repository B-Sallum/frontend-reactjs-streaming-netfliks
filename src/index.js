import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import NavBar from './components/nav'
import Login from './components/login';
import Register from './components/reg';
import Movie from './components/movie';
import Profile from './components/profile';
import MyList from './components/myList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/mylist/" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);