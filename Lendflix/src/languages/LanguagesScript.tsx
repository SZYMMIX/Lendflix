import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import LanguagesBackground from "./LanguagesBackground";
function LanguagesScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
        <LanguagesBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default LanguagesScript