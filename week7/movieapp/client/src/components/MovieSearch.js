import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import MovieList from "./MovieList";

function MovieSearch({searchValue, setSearchValue, movies, addFavouriteMovie, AddFavourites}){
    return(<div className='container-fluid movie-app'>
    <div className=''>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
    <div className='row'>
        <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
        />
  </div>

</div>)
}



export default MovieSearch