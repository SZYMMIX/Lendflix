import { useState } from "react";
import { Icon, Text } from '@fluentui/react';
import { Link, Route, Switch } from 'react-router-dom';
import Edit from "./Edit";

function Profile({ name, imageId, isEditing }){
const [isHovered, setIsHovered] = useState(false);
const currentUser = [name, imageId];
return(
    <>
    <div className={`account-card ${isEditing ? 'editing' : ''}`}>
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {!isEditing ? 
        (<a href="./menu.html#/strona-główna" onClick={() => localStorage.setItem('currentUser', JSON.stringify(currentUser))}>
        <img src={`/src/assets/default-img-${imageId}.jpg`} alt={name}
         className="account-image"/>
        </a>) : 
        (<img src={`/src/assets/default-img-${imageId}.jpg`} 
            alt={name} className={`account-image ${isHovered ? "darker-image" : ""}`}/>)}
        {isEditing && isHovered && (
            <a href="edit-account.html" onClick={() => localStorage.setItem('currentUser', JSON.stringify(currentUser))}>
            <Icon iconName="Edit" id="edit-icon" />
            </a>           
      )}
    <Text className="profile-text">{name}</Text>

        </div> 
    </div>
    </>

);
};
export default Profile