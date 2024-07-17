import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import LockBackground from "./LockBackground";
function LockScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <LockBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default LockScript