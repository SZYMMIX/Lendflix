import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import PasswordBackground from "./PasswordBackground";
function PasswordScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="change-background">
            <PasswordBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default PasswordScript