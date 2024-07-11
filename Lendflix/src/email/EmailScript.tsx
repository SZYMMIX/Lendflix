import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import EmailBackground from "./EmailBackground";
function EmailScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="change-background">
            <EmailBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default EmailScript