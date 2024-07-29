import { useState } from "react";
import { Icon, Text } from "@fluentui/react";

function MovieTile({movieName, movieId}){

const [isMovieHovered, setIsMovieHovered] = useState(false);
const numberMovieId = parseInt(movieId);
const clickedMovie = [movieName, movieId];
function handleMovieClick(){
localStorage.setItem('clickedMovie', JSON.stringify(clickedMovie));
}
return(
    
    <div className={`movie-image-container ${isMovieHovered ? "image-container-hovered" : ""}`}>
        <a className="movie-tile-anchor" href="movie-tile.html" onClick={handleMovieClick}>
    <img src={`./src/assets/${movieName}.jpg`} alt={`${movieName}`} 
         className={`movie-tile-image ${movieId == "1" ? "movie-tile-first" : ""}`} 
         onMouseEnter={() => setIsMovieHovered(true)} onMouseLeave={() => setIsMovieHovered(false)}/>
    <div className={`movie-tile-hovered-container ${numberMovieId % 9 === 0 ? "left-tile" : "right-tile"}`} id={`${isMovieHovered ? "tile-visible" : "tile-hidden"}`}
    onMouseEnter={isMovieHovered ? () => setIsMovieHovered(true) : ""} onMouseLeave={isMovieHovered ? () => setIsMovieHovered(false) : ""}>
        <ul className="movie-tile-ul">
            <li><Text className="movie-tile-text">Mroczny</Text></li>
            <li><Text className="movie-tile-text">Dystopijny</Text></li>
            <li><Text className="movie-tile-text">Brutalny</Text></li>
    </ul>
    <Text className="movie-tile-text-review">Trafność: 98%</Text>
    </div>
    </a>
    </div>
);
};
export default MovieTile