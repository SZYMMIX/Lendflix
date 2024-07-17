import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import RestrictionsBackground from "./RestictionsBackground";
function RestrictionsScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
        <RestrictionsBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default RestrictionsScript