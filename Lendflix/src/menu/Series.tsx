import { Icon, Text } from "@fluentui/react";
import MovieTile from "./MovieTile";
import { useState } from "react";
import MovieTilesProgress from "./MovieTilesProgress";

function Series () {
  const [movieTileIndex1, setMovieTileIndex1] = useState(0);
  const [movieTileIndex2, setMovieTileIndex2] = useState(0);
  const [movieTileIndex3, setMovieTileIndex3] = useState(0);
    
    const [isHovered, setIsHovered] = useState({isHovered1: false, isHovered2: false, isHovered3: false});
    function HandleMouseEnter(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:true}));
    }
    function HandleMouseLeave(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:false}));
    }
        
    function handleLeftClick(index:number, setIndex) {
      setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 2));
  }
  function handleRightClick(index:number, setIndex, maxIndex:number) {
    setIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : 0));
}
const calculateTranslateX = (index:number) => {
  return `translateX(-${index * 100}%)`;
}
    const movies1: {movieName:string, movieId:string}[] = [
        {movieName:'Bridgerton', movieId:"1"},
        {movieName:'FightClub', movieId:"2"},
        {movieName:'TheLastOfUs', movieId:"3"},
        {movieName:'Manifest', movieId:"4"},
        {movieName:'Sherlock', movieId:"5"},
        {movieName:'Bridgerton', movieId:"6"},
        {movieName:'Sherlock', movieId:"7"},
        {movieName:'TheLastOfUs', movieId:"8"},
        {movieName:'Bridgerton', movieId:"9"},
        {movieName:'Witcher', movieId:"10"},
        {movieName:'Sherlock', movieId:"11"},
        {movieName:'TheLastOfUs', movieId:"12"},
        {movieName:'Bridgerton', movieId:"13"},
        {movieName:'Witcher', movieId:"14"},
        {movieName:'Manifest', movieId:"15"},
        {movieName:'Bridgerton', movieId:"16"},
        {movieName:'TheLastOfUs', movieId:"17"},
        {movieName:'Bridgerton', movieId:"18"},
        {movieName:'Witcher', movieId:"19"},
        {movieName:'Manifest', movieId:"20"},
        {movieName:'Witcher', movieId:"21"},
        {movieName:'TheLastOfUs', movieId:"22"},
        {movieName:'Bridgerton', movieId:"23"},
        {movieName:'Witcher', movieId:"24"},
        {movieName:'Manifest', movieId:"25"},
        {movieName:'Witcher', movieId:"26"},
        {movieName:'Manifest', movieId:"27"}              
      ];
      const movies2: {movieName:string, movieId:string}[] = [
        {movieName:'TheLastOfUs', movieId:"1"},
        {movieName:'Bridgerton', movieId:"2"},
        {movieName:'Witcher', movieId:"3"},
        {movieName:'Halloween', movieId:"4"},
        {movieName:'Dune2', movieId:"5"},
        {movieName:'TheSuperMarioBros', movieId:"6"},
        {movieName:'Joker', movieId:"7"},
        {movieName:'TheLastOfUs', movieId:"8"},
        {movieName:'Bridgerton', movieId:"9"},
        {movieName:'FightClub', movieId:"10"},
        {movieName:'Joker', movieId:"11"},
        {movieName:'TheLastOfUs', movieId:"12"},
        {movieName:'Bridgerton', movieId:"13"},
        {movieName:'Witcher', movieId:"14"},
        {movieName:'Halloween', movieId:"15"},
        {movieName:'Dune2', movieId:"16"},
        {movieName:'TheLastOfUs', movieId:"17"},
        {movieName:'Bridgerton', movieId:"18"},
        {movieName:'Witcher', movieId:"19"},
        {movieName:'Halloween', movieId:"20"},
        {movieName:'Dune2', movieId:"21"},
        {movieName:'TheLastOfUs', movieId:"22"},
        {movieName:'Bridgerton', movieId:"23"},
        {movieName:'Witcher', movieId:"24"},
        {movieName:'Manifest', movieId:"25"},
        {movieName:'Witcher', movieId:"26"},
        {movieName:'Manifest', movieId:"27"}                        
      ];
      const movies3: {movieName:string, movieId:string}[] = [
        {movieName:'Dune2', movieId:"1"},
        {movieName:'JohnWick2', movieId:"2"},
        {movieName:'Halloween', movieId:"3"},
        {movieName:'FightClub', movieId:"4"},
        {movieName:'Joker', movieId:"5"},
        {movieName:'Aladdin', movieId:"6"},
        {movieName:'Bohemian', movieId:"7"},
        {movieName:'TheLastOfUs', movieId:"8"},
        {movieName:'Bridgerton', movieId:"9"},
        {movieName:'FightClub', movieId:"10"},
        {movieName:'Joker', movieId:"11"},
        {movieName:'TheLastOfUs', movieId:"12"},
        {movieName:'Bridgerton', movieId:"13"},
        {movieName:'Witcher', movieId:"14"},
        {movieName:'Halloween', movieId:"15"},
        {movieName:'Dune2', movieId:"16"},
        {movieName:'TheLastOfUs', movieId:"17"},
        {movieName:'Bridgerton', movieId:"18"},
        {movieName:'Witcher', movieId:"19"},
        {movieName:'Halloween', movieId:"20"},
        {movieName:'Dune2', movieId:"21"},
        {movieName:'TheLastOfUs', movieId:"22"},
        {movieName:'Bridgerton', movieId:"23"},
        {movieName:'Witcher', movieId:"24"},
        {movieName:'Manifest', movieId:"25"},
        {movieName:'Witcher', movieId:"26"},
        {movieName:'Manifest', movieId:"27"}                      
      ];
const moviesList1 = movies1.map(movie1 => <MovieTile key={movie1.movieId} movieName={movie1.movieName} movieId={movie1.movieId}/>)
const moviesList2 = movies2.map(movie2 => <MovieTile key={movie2.movieId} movieName={movie2.movieName} movieId={movie2.movieId}/>)
const moviesList3 = movies3.map(movie3 => <MovieTile key={movie3.movieId} movieName={movie3.movieName} movieId={movie3.movieId}/>)
    return(
    <div className="menu-background">
    <br/> <br/>
    <Text className='start-text1' id="popular-movies">Seriale wybrane dla ciebie</Text>
    <MovieTilesProgress currentIndex={movieTileIndex1} totalSlides={3}/>  
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("1")} onMouseLeave={() => HandleMouseLeave("1")}>
    
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`} onClick={() => handleLeftClick(movieTileIndex1, setMovieTileIndex1)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
    <div className="movie-tiles-wrapper">
        <div className="movie-tiles" style={{ transform: calculateTranslateX(movieTileIndex1) }}>
              {moviesList1}
        </div>
    </div>
     <div className={`right-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(movieTileIndex1, setMovieTileIndex1, 2)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    
    </div>
    <Text className='start-text1' id="new-movies">Nowość</Text>
    <div className="movie-tile-progress-container">
    <MovieTilesProgress currentIndex={movieTileIndex2} totalSlides={3}/>  
    </div>
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("2")} onMouseLeave={() => HandleMouseLeave("2")}>
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`}  onClick={() => handleLeftClick(movieTileIndex2, setMovieTileIndex2)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
    <div className="movie-tiles-wrapper">
        <div className="movie-tiles" style={{ transform: calculateTranslateX(movieTileIndex2) }}>
              {moviesList2}
        </div>
    </div>
    <div className={`right-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(movieTileIndex2, setMovieTileIndex2, 2)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    </div>
    <Text className='start-text1' id="new-movies">Kultowe seriale</Text>
    <div className="movie-tile-progress-container">
    <MovieTilesProgress currentIndex={movieTileIndex3} totalSlides={3}/>  
    </div>
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("3")} onMouseLeave={() => HandleMouseLeave("3")}>
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`} onClick={() => handleLeftClick(movieTileIndex3, setMovieTileIndex3)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
    <div className="movie-tiles-wrapper">
        <div className="movie-tiles" style={{ transform: calculateTranslateX(movieTileIndex3) }}>
              {moviesList3}
        </div>
    </div>
    <div className={`right-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(movieTileIndex3, setMovieTileIndex3, 2)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    </div>
    <div className="fill-container">     
    </div>
    </div>
    );
};
export default Series