import { Text } from "@fluentui/react";
import MovieTile from "./MovieTile";
function Section1(){
    return(
    <>
    <div className="menu-background">
    <br/> <br/>
    <Text className='start-text1' id="popular-movies">Popularne na Lendflix</Text>
    <div className="movies-section">
    <MovieTile movieName={'Joker'}/>
    <MovieTile movieName={'FightClub'}/>
    <MovieTile movieName={'Us'}/>
    <MovieTile movieName={'Aladdin'}/>
    <MovieTile movieName={'TheSuperMarioBros'}/>
    <MovieTile movieName={'Halloween'}/>
    <MovieTile movieName={'JohnWick2'}/>
    </div>
    <Text className='start-text1' id="new-movies">Nowość</Text>
    <div className="movies-section">
    <MovieTile movieName={'Us'}/>
    <MovieTile movieName={'Aladdin'}/>
    <MovieTile movieName={'Bohemian'}/>
    <MovieTile movieName={'Halloween'}/>
    <MovieTile movieName={'Dune2'}/>
    <MovieTile movieName={'TheSuperMarioBros'}/>
    <MovieTile movieName={'Joker'}/>
    
    </div>
    <Text className='start-text1' id="new-movies">Kultowe filmy</Text>
    <div className="movies-section">
    <MovieTile movieName={'Dune2'}/>
    <MovieTile movieName={'JohnWick2'}/>
    <MovieTile movieName={'Halloween'}/>
    <MovieTile movieName={'FightClub'}/>
    <MovieTile movieName={'Joker'}/>
    <MovieTile movieName={'Aladdin'}/>
    <MovieTile movieName={'Bohemian'}/>
    
    </div>
    <div className="fill-container">       
    </div>
    </div>
    </>
    );
};
export default Section1