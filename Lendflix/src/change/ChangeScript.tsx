import ChangeHeader from "./ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import ChangeBackground from "./ChangeBackground";

function ChangeScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="change-background">
        <ChangeBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default ChangeScript