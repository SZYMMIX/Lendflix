import InfoHeader from "./InfoHeader";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import LeftSection from "./LeftSection";
import RightDefaultSection from "./RightDefaultSection";
import InfoFooter from "./InfoFooter";
import Profiles from "./Profiles";
import Security from "./Security";
import Payment from "./Payment";
import { useState } from "react";
import Shopping from "./Shopping";

function InfoScript(){
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    function ChangeRight1(){
        if (!isActive1)  setIsActive1(!isActive1);
        if(isActive2 || isActive3 || isActive4 || isActive5){
            setIsActive2(false);
            setIsActive3(false);
            setIsActive4(false);
            setIsActive5(false);
        }
        }
        function ChangeRight2(){
            if (!isActive2)  setIsActive2(!isActive2);
            if(isActive1 || isActive3 || isActive4 || isActive5){
                setIsActive1(false);
                setIsActive3(false);
                setIsActive4(false);
                setIsActive5(false);
            }
            }
        function ChangeRight3(){
            if (!isActive3)  setIsActive3(!isActive3);
            if(isActive1 || isActive2 || isActive4 || isActive5){
                setIsActive1(false);
                setIsActive2(false);
                setIsActive4(false);
                setIsActive5(false);
            }
                }
        function ChangeRight4(){
            if (!isActive4)  setIsActive4(!isActive4);
            if(isActive1 || isActive2 || isActive3 || isActive5){
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive5(false);
            }
         }
         function ChangeRight5(){
            if (!isActive5)  setIsActive5(!isActive5);
            if(isActive1 || isActive2 || isActive3 || isActive4){
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
                setIsActive4(false);
            }
         }
    return(
        <Router>
        <InfoHeader ChangeRight4={ChangeRight4} ChangeRight1={ChangeRight1}/>
        <div className="info-background">
        <LeftSection isActive1={isActive1}
                    isActive2={isActive2}
                    isActive3={isActive3}
                    isActive4={isActive4}
                    isActive5={isActive5}
                    ChangeRight1={ChangeRight1}
                    ChangeRight2={ChangeRight2}
                    ChangeRight3={ChangeRight3}
                    ChangeRight4={ChangeRight4}
                    ChangeRight5={ChangeRight5}/>
        <Routes>
        <Route path="/" element={<RightDefaultSection ChangeRight2={ChangeRight2} ChangeRight4={ChangeRight4}/>}/>
        <Route path="/moje-konto" element={<RightDefaultSection ChangeRight2={ChangeRight2} ChangeRight4={ChangeRight4}/>}/>
        <Route path="/członkostwo" element={<Payment/>}/>
        <Route path="/ochrona" element={<Security/>}/>
        <Route path="/profile" element={<Profiles/>}/>
        <Route path="/wypożyczenia" element={<Shopping/>}/>
        </Routes>
        </div>
        <InfoFooter/>
        </Router>
    
    );
};

export default InfoScript