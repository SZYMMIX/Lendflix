import Profile from "./Profile";
import { useState } from "react";
import { Icon, Text } from '@fluentui/react';
function ABackground(){
return(
<div className="accounts-background">
    <div className="account-text-container">
    <Text className='start-text1' id='accounts-text'>Kto ogląda Lendflix?</Text>
    </div>
    <div className="profiles-container">
        <Profile name="123"/>
        <Profile name="3231"/>
        <Profile name="dsadsa"/>
      </div> 
</div>
);
};
export default ABackground