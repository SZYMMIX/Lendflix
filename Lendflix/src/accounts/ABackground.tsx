import Profile from "./Profile";
import { useState } from "react";
import { Icon, Text } from '@fluentui/react';

function ABackground(){
  /*<Icon iconName="CircleAddition" id="add-icon"/>
      
      */
     const [isEditing, setIsEditing] = useState(false);
     const profiles: {name:string; imageId:string}[] = [
                            {name:"User 1", imageId:"1"},
                            {name:"User 2", imageId:"2"},
                            {name:"User 3", imageId:"3"},
                            {name:"User 4", imageId:"4"},
                            {name:"User 5", imageId:"1"},
                            {name:"User 6", imageId:"2"}                          
                          ];
     const profilesList = profiles.map(profile => <Profile name={profile.name}
                                       imageId={profile.imageId} isEditing={isEditing}/>)
return(
<div className="accounts-background">
    <div className="account-text-container">
    <Text className='start-text1' id='accounts-text'>Kto ogląda Lendflix?</Text>
    </div>
    <div className="profiles-container">
        {profilesList}      
      </div>
      <div id="edit-profile-container">
        {!isEditing ? (<button id="edit-profile-button" 
                      onClick={() => setIsEditing(true)}>Edytuj profil</button>):
                      (<button id="finished-button"  
                      onClick={() => setIsEditing(false)}>Gotowe</button>)}
      
      
      </div>
      
</div>
);
};
export default ABackground