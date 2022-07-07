import MovieListHeading from "./MovieListHeading";


function FavoriteList({history, clearHistory}) {
    return (<div className='movie-container'>
        <MovieListHeading heading='Movie History' />
        <div className='row'>
         {
            history.map((search, index)=>{
                return(
                    <p>{search}</p>
                )
            })
         }
        </div>
    </div>)
}



export default FavoriteList