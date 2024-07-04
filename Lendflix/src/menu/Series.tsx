import { Icon, Text } from "@fluentui/react";
import { useState } from "react";
import MovieTile from "./MovieTile";

function Series () {
    const [isHovered, setIsHovered] = useState({isHovered1: false, isHovered2: false, isHovered3: false});
    function HandleMouseEnter(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:true}));
    }
    function HandleMouseLeave(sectionId:string){
        setIsHovered(prevState => ({...prevState, [`isHovered${sectionId}`]:false}));
    }
    const series1: {movieName:string, movieId:string}[] = [
        {movieName:'Witcher', movieId:"1"},
        {movieName:'StrangerThings', movieId:"2"},
        {movieName:'TheLastOfUs', movieId:"3"},
        {movieName:'Manifest', movieId:"4"},
        {movieName:'Daredevil', movieId:"5"},
        {movieName:'Flash', movieId:"6"},
        {movieName:'Bridgerton', movieId:"7"}                     
      ];
      const series2: {movieName:string, movieId:string}[] = [
        {movieName:'TheLastOfUs', movieId:"1"},
        {movieName:'Manifest', movieId:"2"},
        {movieName:'Sherlock', movieId:"3"},
        {movieName:'Flash', movieId:"4"},
        {movieName:'Office', movieId:"5"},
        {movieName:'Daredevil', movieId:"6"},
        {movieName:'Witcher', movieId:"7"}                     
      ];
      const series3: {movieName:string, movieId:string}[] = [
        {movieName:'Office', movieId:"1"},
        {movieName:'Bridgerton', movieId:"2"},
        {movieName:'Flash', movieId:"3"},
        {movieName:'StrangerThings', movieId:"4"},
        {movieName:'Witcher', movieId:"5"},
        {movieName:'Manifest', movieId:"6"},
        {movieName:'Sherlock', movieId:"7"}                     
      ];
const seriesList1 = series1.map(s1 => <MovieTile key={s1.movieId} movieName={s1.movieName} movieId={s1.movieId}/>)
const seriesList2 = series2.map(s2 => <MovieTile key={s2.movieId} movieName={s2.movieName} movieId={s2.movieId}/>)
const seriesList3 = series3.map(s3 => <MovieTile key={s3.movieId} movieName={s3.movieName} movieId={s3.movieId}/>)

    return(
       <div className="menu-background">
       <br/> <br/>
      <Text className='start-text1' id="popular-movies">Seriale wybrane dla ciebie</Text>
      <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("1")} onMouseLeave={() => HandleMouseLeave("1")}>
      <div className="movies-section">
      <div className={`left-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`}>
      <Icon iconName="ChevronLeftMed" id="search-icon"/>
      </div>
      {seriesList1} 
       <div className={`right-button ${isHovered.isHovered1 ? "hovered-visible-button" : ""}`}>
       <Icon iconName="ChevronRightMed" id="search-icon"/>
      </div>
      </div>
      
      </div>
      <Text className='start-text1' id="new-movies">Popularne na Lendflix</Text>
      <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("2")} onMouseLeave={() => HandleMouseLeave("2")}>
      
      <div className="movies-section">
      <div className={`left-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`}>
      <Icon iconName="ChevronLeftMed" id="search-icon"/>
      </div>
      {seriesList2} 
       <div className={`right-button ${isHovered.isHovered2 ? "hovered-visible-button" : ""}`}>
       <Icon iconName="ChevronRightMed" id="search-icon"/>
      </div>
      </div>
      
      </div>
      <Text className='start-text1' id="new-movies">Nowość</Text>
      <div className="movies-section-container" onMouseEnter={() => HandleMouseEnter("3")} onMouseLeave={() => HandleMouseLeave("3")}>
      
      <div className="movies-section">
      <div className={`left-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`}>
      <Icon iconName="ChevronLeftMed" id="search-icon"/>
      </div>
      {seriesList3}
       <div className={`right-button ${isHovered.isHovered3 ? "hovered-visible-button" : ""}`}>
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