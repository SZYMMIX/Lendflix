import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import PhoneBackground from "./PhoneBackground";
function PhoneScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <PhoneBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default PhoneScript