

function MovieTilesProgress({ currentIndex, totalSlides }){
    const indicators = [];
    for (let i = 0; i < totalSlides; i++) {
        indicators.push(
            <div key={i} className={`movie-tiles-progress ${i === currentIndex ? 'active' : ''}`} />
        );
    }
    return(
    <div className="movie-tile-progress-container">
        {indicators}
    </div>
    );

};
export default MovieTilesProgress