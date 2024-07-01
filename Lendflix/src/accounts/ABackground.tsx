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
        <Profile name="User 1" imageId="1"/>
        <Profile name="User 2" imageId="2"/>
        <Profile name="User 3" imageId="3"/>
        <Profile name="User 4" imageId="4"/>
        <Profile name="User 5" imageId="1"/>
        <Profile name="User 6" imageId="2"/>
        
      </div>
      <div id="icon-container">
      <Icon iconName="CircleAddition" id="add-icon"/>
      </div>
      
</div>
);
};
export default ABackground