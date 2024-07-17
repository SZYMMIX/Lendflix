import ChangeHeader from "../change/ChangeHeader";
import InfoFooter from "../info/InfoFooter";
import WatchBackground from "./WatchBackground";

function WatchScript(){
    return(
        <>
        <ChangeHeader/>
        <div className="watch-background">
        <WatchBackground/>
        </div>
        <InfoFooter/>
        </>
    
    );
};

export default WatchScript