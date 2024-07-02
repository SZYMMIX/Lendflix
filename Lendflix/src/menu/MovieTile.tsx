function MovieTile({movieName}){
return(
    <div className="movie-image-container">
    <img src={`./src/assets/${movieName}.jpg`} alt={`${movieName}`} className="movie-tile-image" />
    </div>

);
};
export default MovieTile