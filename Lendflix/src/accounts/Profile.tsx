import { useState } from "react";
import { Icon, Text } from '@fluentui/react';

function Profile({ name, imageId, isEditing }){
const [isHovered, setIsHovered] = useState(false);
function changeProfile():void{

}
return(
    <>
    <div className={`account-card ${isEditing ? 'editing' : ''}`}>
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {!isEditing ? 
        (<a href="./menu.html">
        <img src={`/src/assets/default-img-${imageId}.jpg`} alt={name}
         className="account-image"/>
        </a>) : 
        (<img src={`/src/assets/default-img-${imageId}.jpg`} 
            alt={name} className={`account-image ${isHovered ? "darker-image" : ""}`}/>)}
        {isEditing && isHovered && (
        <Icon iconName="Edit" id="edit-icon" onClick={changeProfile}/>
      )}
    <Text className="profile-text">{name}</Text>
    
        </div> 
    </div>
    </>

);
};
export default Profile