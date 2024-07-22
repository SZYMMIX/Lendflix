import { Text } from '@fluentui/react'

function MovieBackground(){
    var clickedMovie = JSON.parse(localStorage.getItem('clickedMovie'));
    return(
        <div className="movie-background">
            <div className='movie-page-tile-container'>
             <img src={`./src/assets/${clickedMovie[0]}.jpg`} alt={`${clickedMovie[0]}`} 
         className='movie-page-tile-image'  />
         <Text className='movie-page-tile-text'>{clickedMovie[0]}</Text>
         <div className='movie-page-info-container'>
         <Text className='movie-page-info-text'>USA</Text>
         <div className='movie-info-line'/>
         <Text className='movie-page-info-text'>2022</Text>
         <div className='movie-info-line'/>
         <Text className='movie-page-info-text'>86 min</Text>
         </div>
         <ul className="movie-tile-ul" id='movie-page-list'>
            <li><Text className="movie-tile-text">Mroczny</Text></li>
            <li><Text className="movie-tile-text">Dystopijny</Text></li>
            <li><Text className="movie-tile-text">Brutalny</Text></li>
         </ul>
            <Text className="movie-tile-text-review" id='movie-page-review'>Trafność: 98%</Text>
         </div>
         <div className='additional-info-container'>
            <div className='additional-info-subcontainer'>
         <Text className='movie-page-description-title'>Opis filmu:</Text>
         <Text className='movie-page-description-text'>Pozornie normalna rodzina przenosi się na amerykańską dzicz w nadziei na ucieczkę od presji współczesnego społeczeństwa. Kiedy jednak na jaw zaczynają wychodzić tajemnice, członkowie rodziny zdają sobie sprawę, że nie uda im się uciec od problemów.</Text>
         </div>
         <div className='additional-info-subcontainer'>
         <Text className='movie-page-info-title'>Obsada:</Text>
         <div className='movie-page-people-container'>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Annet Mahendru</Text></button>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Michael Cudlitz</Text></button>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Milo Gibson</Text></button>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Tim Heidecker</Text></button>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Tom Cruise</Text></button>
         </div>
         </div>
         <div className='additional-info-subcontainer'>
         <Text className='movie-page-info-title'>Reżyseria:</Text>
         <div className='movie-page-people-container'>
         <button className='movie-page-people-button'><Text className='movie-page-btn-text'>Joe Dietsch</Text></button>
         </div>
         </div>
         </div>
        </div>
    );
};

export default MovieBackground