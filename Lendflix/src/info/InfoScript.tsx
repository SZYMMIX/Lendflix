import InfoHeader from "./InfoHeader";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import LeftSection from "./LeftSection";
import RightDefaultSection from "./RightDefaultSection";
import InfoFooter from "./InfoFooter";
import Profiles from "./Profiles";
import Security from "./Security";
import Payment from "./Payment";

function InfoScript(){
   // <Route path="/" element={<Section1/>}/>
    return(
        <Router>
        <InfoHeader/>
        <div className="info-background">
        <LeftSection/>
        <Routes>
        <Route path="/" element={<RightDefaultSection/>}/>
        <Route path="/moje-konto" element={<RightDefaultSection/>}/>
        <Route path="/członkostwo" element={<Payment/>}/>
        <Route path="/ochrona" element={<Security/>}/>
        <Route path="/profile" element={<Profiles/>}/>
        </Routes>
        </div>
        <InfoFooter/>
        </Router>
    
    );
};

export default InfoScript