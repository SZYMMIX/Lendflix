import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import VerifyBackground from "./VerifyBackground";
function VerifyScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <VerifyBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default VerifyScript