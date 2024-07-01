import { useState } from "react";
import { Icon, Text } from '@fluentui/react';

function Profile(props){
return(
    <>
    <div className="account-card">
        <a href="./menu.html">
        <img src={`/src/assets/default-img-${props.imageId}.jpg`} className="account-image"/>
        </a>
    <Text className="profile-text">{props.name}</Text>
    </div>
    </>

);
};
export default Profile