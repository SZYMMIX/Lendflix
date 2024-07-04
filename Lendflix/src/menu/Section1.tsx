import { Icon, Text } from "@fluentui/react";
import MovieTile from "./MovieTile";
import { useState } from "react";
function Section1(){
    //transform: translateX(-90%);
    const [movieTileIndex, setMovieTileIndex] = useState(0);
    const [isHovered, setIsHovered] = useState({isHovered1: false, isHovered2: false, isHovered3: false});
    function HandleMouseEnter(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:true}));
    }
    function HandleMouseLeave(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:false}));
    }
    function handleLeftClick(section:number) {
      setMovieTileIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  }
  function handleRightClick(section:number, maxIndex:number) {
    setMovieTileIndex(prevIndex => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex));
}
    const movies1: {movieName:string, movieId:string}[] = [
        {movieName:'Joker', movieId:"1"},
        {movieName:'FightClub', movieId:"2"},
        {movieName:'Us', movieId:"3"},
        {movieName:'Manifest', movieId:"4"},
        {movieName:'Sherlock', movieId:"5"},
        {movieName:'Bridgerton', movieId:"6"},
        {movieName:'JohnWick2', movieId:"7"},
        {movieName:'TheLastOfUs', movieId:"8"},
        {movieName:'Bridgerton', movieId:"9"},
        {movieName:'FightClub', movieId:"10"},
        {movieName:'Joker', movieId:"11"},
        {movieName:'TheLastOfUs', movieId:"12"},
        {movieName:'Bridgerton', movieId:"13"},
        {movieName:'Witcher', movieId:"14"},
        {movieName:'Halloween', movieId:"15"},
        {movieName:'Dune2', movieId:"16"}                
      ];
      const movies2: {movieName:string, movieId:string}[] = [
        {movieName:'TheLastOfUs', movieId:"1"},
        {movieName:'Bridgerton', movieId:"2"},
        {movieName:'Witcher', movieId:"3"},
        {movieName:'Halloween', movieId:"4"},
        {movieName:'Dune2', movieId:"5"},
        {movieName:'TheSuperMarioBros', movieId:"6"},
        {movieName:'Joker', movieId:"7"}                     
      ];
      const movies3: {movieName:string, movieId:string}[] = [
        {movieName:'Dune2', movieId:"1"},
        {movieName:'JohnWick2', movieId:"2"},
        {movieName:'Halloween', movieId:"3"},
        {movieName:'FightClub', movieId:"4"},
        {movieName:'Joker', movieId:"5"},
        {movieName:'Aladdin', movieId:"6"},
        {movieName:'Bohemian', movieId:"7"}                     
      ];
const moviesList1 = movies1.map(movie1 => <MovieTile key={movie1.movieId} movieName={movie1.movieName} movieId={movie1.movieId}/>)
const moviesList2 = movies2.map(movie2 => <MovieTile key={movie2.movieId} movieName={movie2.movieName} movieId={movie2.movieId}/>)
const moviesList3 = movies3.map(movie3 => <MovieTile key={movie3.movieId} movieName={movie3.movieName} movieId={movie3.movieId}/>)
    return(
    <div className="menu-background">
    <br/> <br/>
    <Text className='start-text1' id="popular-movies">Popularne na Lendflix</Text>
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("1")} onMouseLeave={() => HandleMouseLeave("1")}>
    
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`} onClick={() => handleLeftClick(1)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
     {moviesList1}
     <div className={`right-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(1, movies1.length - 1)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    
    </div>
    <Text className='start-text1' id="new-movies">Nowość</Text>
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("2")} onMouseLeave={() => HandleMouseLeave("2")}>
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`}  onClick={() => handleLeftClick(2)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
    {moviesList2}
    <div className={`right-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(2, movies2.length - 1)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    </div>
    <Text className='start-text1' id="new-movies">Kultowe filmy</Text>
    <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("3")} onMouseLeave={() => HandleMouseLeave("3")}>
    <div className="movies-section">
    <div className={`left-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`} onClick={() => handleLeftClick(3)}>
    <Icon iconName="ChevronLeftMed" id="search-icon"/>
    </div>
    {moviesList3}
    <div className={`right-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`} onClick={() => handleRightClick(3, movies3.length - 1)}>
     <Icon iconName="ChevronRightMed" id="search-icon"/>
    </div>
    </div>
    </div>
    <div className="fill-container">       
    </div>
    </div>
    );
};
export default Section1