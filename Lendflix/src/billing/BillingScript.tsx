import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import BillingBackground from "./BillingBackground";
function BillingScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="change-background">
            <BillingBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default BillingScript