import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import FavoriteList from './components/FavoritesList';
import MovieSearch from './components/MovieSearch';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HistoryList from './components/HistoryList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [history, setHistory] = useState([]);
  
  function searchHandler(event){
    setSearchValue(event.target.value)
    historySaver(event.key, event.target.value)
  }
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7edd88ec`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    
    }
  };
  function historySaver(key, value){
    console.log(key, value )
    if (key === "Enter"){
      setHistory(prevState => {
        return (
          [
            ...prevState,
            value
          ]
        )
      })
    }
  }
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
   // window.addEventListener("keydown", historySaver)
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<MovieSearch
            searchValue={searchValue} setSearchValue={searchHandler} movies={movies} addFavouriteMovie={addFavouriteMovie} AddFavourites={AddFavourites}
          />}
        />
        <Route
          path="/Favorites"
          element={<FavoriteList
            favourites={favourites} removeFavouriteMovie={removeFavouriteMovie} RemoveFavourites={RemoveFavourites}
          />}
        />
        <Route
          path="/History"
          element={<HistoryList
            history={history}
          />}
        />
      </Routes>
    </div>
  );
};


export default App;