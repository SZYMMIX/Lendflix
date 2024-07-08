import MenuNavigation from "./MenuNavigation";
import Divider from "../index/Divider";
import Footer from "../index/Footer";
import Section1 from "./Section1";
import Bought from "./Bought";
import Info from "./Info";
import Movies from "./Movies";
import Series from "./Series";
import { HashRouter as Router, Route, Routes} from "react-router-dom";


function MenuScript(){
    return(
        <Router>
        <MenuNavigation/>
        <Divider/>
        <Routes>
            <Route path="/" element={<Section1/>}/>
            <Route path="/kupione-produkty" element={<Bought/>}/>
            <Route path="/konto" element={<Info/>}/>
            <Route path="/filmy" element={<Movies/>}/>
            <Route path="/seriale" element={<Series/>}/>
            <Route path="/strona-główna" element={<Section1/>}/> 
        </Routes>
        <Divider/>
        <Footer/>
        </Router>
    );
};

export default MenuScript