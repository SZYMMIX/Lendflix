import { useState } from "react";
import { Icon, Text } from "@fluentui/react";

function MovieTile({movieName, movieId}){

const [isMovieHovered, setIsMovieHovered] = useState(false);
return(
    <div className={`movie-image-container ${isMovieHovered ? "image-container-hovered" : ""}`}
   >
    <img src={`./src/assets/${movieName}.jpg`} alt={`${movieName}`} 
         className={`movie-tile-image ${movieId == "1" ? "movie-tile-first" : ""}`} 
         onMouseEnter={() => setIsMovieHovered(true)} onMouseLeave={() => setIsMovieHovered(false)}/>
    <div className={`movie-tile-hovered-container `} id={`${isMovieHovered ? "tile-visible" : "tile-hidden"}`}
    onMouseEnter={isMovieHovered ? () => setIsMovieHovered(true) : ""} onMouseLeave={isMovieHovered ? () => setIsMovieHovered(false) : ""}>
    <Text>Tragedia</Text>
    </div>
    </div>

);
};
export default MovieTile