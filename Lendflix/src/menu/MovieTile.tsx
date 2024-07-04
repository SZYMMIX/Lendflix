function MovieTile({movieName, movieId}){

return(
    <div className="movie-image-container">
    <img src={`./src/assets/${movieName}.jpg`} alt={`${movieName}`} className={`movie-tile-image ${movieId == "1" ? "movie-tile-first" : ""}`} />
    </div>

);
};
export default MovieTile