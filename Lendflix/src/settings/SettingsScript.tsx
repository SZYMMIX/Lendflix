import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import SettingsBackground from "./SettingsBackground";
function SettingsScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="payment-background">
            <SettingsBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default SettingsScript