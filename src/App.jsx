import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

import Home from './pages/home/home';
import MovieList from './components/movielist/movielist';
import Movie from './pages/movieDetail/Movie';



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      <Route path='movies/:type' element={<MovieList />}></Route>
      <Route path='movie/:id' element={<Movie />}></Route>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>

      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;