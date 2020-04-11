import React from 'react';

import MovieDetails from './components/MovieDetails'
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
    <h1>redux Movies</h1>
    <div className="container">
    <MovieList/>
    <MovieDetails/>

    </div>
      
    </div>
  );
}

export default App;
