import { Text } from '@fluentui/react';
import { useState } from 'react';
function EBackground(){
    const [isClicked, setIsClicked] = useState(false);
    function ChangeImage(){
    setIsClicked(!isClicked);
    }
    return(
        <div id="edit-background">
            <div className="account-edit-card">
                <div className='initial-text-container'>
                <Text className="profile-text" id='edit-profile-title'>Edytuj profil:</Text>
                <Text className="profile-text" id='edit-image-title'>Wybierz swój avatar:</Text>
                </div>
              
                <div id='edit-images-container'>
                <img className={`edit-img ${isClicked ? "img-clicked" : ""}`} src='./src/assets/default-img-1.jpg' alt='profile image 1' onClick={ChangeImage}/>
                <img className={`edit-img ${isClicked ? "img-clicked" : ""}`} src='./src/assets/default-img-2.jpg' alt='profile image 2' onClick={ChangeImage}/>
                <img className={`edit-img ${isClicked ? "img-clicked" : ""}`} src='./src/assets/default-img-3.jpg' alt='profile image 3' onClick={ChangeImage}/>
                <img className={`edit-img ${isClicked ? "img-clicked" : ""}`} src='./src/assets/default-img-4.jpg' alt='profile image 4' onClick={ChangeImage}/>
                </div>
            
            
            </div>
        </div>
    );
};
export default EBackground