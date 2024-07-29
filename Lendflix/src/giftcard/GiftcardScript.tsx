import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import GiftcardBackground from "./GiftcardBackground";
function GiftcardScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <GiftcardBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default GiftcardScript