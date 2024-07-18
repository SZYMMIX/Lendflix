import MovieBackground from "./MovieBackground";
import MovieNavigation from "./MovieNavigation";
import Divider from "../index/Divider";
import Footer from "../index/Footer";

function MovieScript(){
    
    return(
        <>
        <MovieNavigation/>
        <Divider/>
        <MovieBackground/>
        <Divider/>
        <Footer/>
        </>
    );
};

export default MovieScript