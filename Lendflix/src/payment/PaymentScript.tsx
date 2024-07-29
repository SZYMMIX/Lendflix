import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import PaymentBackground from "./PaymentBackground";
function PaymentScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <PaymentBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default PaymentScript