

function MovieBackground(){
    var clickedMovie = JSON.parse(localStorage.getItem('clickedMovie'));
    return(
        <div className="movie-background">
             <img src={`./src/assets/${clickedMovie[0]}.jpg`} alt={`${clickedMovie[0]}`} 
         className='movie-tile-image'  />
        </div>
    );
};

export default MovieBackground