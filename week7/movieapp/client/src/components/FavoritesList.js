import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";

function FavoriteList({favourites, removeFavouriteMovie, RemoveFavourites}) {
    return (<div className='movie-container'>
        <MovieListHeading heading='Favourites' />
        <div className='row'>
            <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
            />
        </div>
    </div>)
}



export default FavoriteList