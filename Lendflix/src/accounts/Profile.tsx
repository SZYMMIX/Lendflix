import { useState } from "react";
import { Icon, Text } from '@fluentui/react';

function Profile(props){
return(
    <>
    <div className="account-card">
        <img src="../assets/default-img.jfif"/>
    <Text >{props.name}</Text>
    </div>
    </>

);
};
export default Profile