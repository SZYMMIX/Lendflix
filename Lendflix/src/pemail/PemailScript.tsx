import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import PemailBackground from "./PemailBackground";
function PemailScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <PemailBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default PemailScript