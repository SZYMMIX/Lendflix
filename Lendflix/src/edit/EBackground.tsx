import { Text } from '@fluentui/react';
import { useState } from 'react';
function EBackground(){
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [profileName, setProfileName] = useState("");
    function ChangeImage1(){
    setIsClicked1(!isClicked1);
    if(isClicked2 || isClicked3 || isClicked4){
        setIsClicked2(false);
        setIsClicked3(false);
        setIsClicked4(false);
    }
    }
    function ChangeImage2(){
        setIsClicked2(!isClicked2);
        if(isClicked1 || isClicked3 || isClicked4){
            setIsClicked1(false);
            setIsClicked3(false);
            setIsClicked4(false);
        }
        }
    function ChangeImage3(){
        setIsClicked3(!isClicked3);
        if(isClicked1 || isClicked2 || isClicked4){
            setIsClicked1(false);
            setIsClicked2(false);
            setIsClicked4(false);
        }
            }
    function ChangeImage4(){
        setIsClicked4(!isClicked4);
        if(isClicked1 || isClicked2 || isClicked3){
            setIsClicked1(false);
            setIsClicked2(false);
            setIsClicked3(false);
        }
     }
    const handleProfileNameSubmit = (e) => {
        e.preventDefault();
     }
    return(
        <div id="edit-background">
            <div className="account-edit-card">
                <div className='initial-text-container'>
                <Text className="profile-text" id='edit-profile-title'>Edytuj profil:</Text>
                <Text className="profile-text" id='edit-image-title'>Wybierz swój avatar:</Text>
                </div>
              
                <div id='edit-images-container'>
                <img className={`edit-img ${isClicked1 ? "img-clicked" : ""}`} src='./src/assets/default-img-1.jpg' alt='profile image 1' onClick={ChangeImage1}/>
                <img className={`edit-img ${isClicked2 ? "img-clicked" : ""}`} src='./src/assets/default-img-2.jpg' alt='profile image 2' onClick={ChangeImage2}/>
                <img className={`edit-img ${isClicked3 ? "img-clicked" : ""}`} src='./src/assets/default-img-3.jpg' alt='profile image 3' onClick={ChangeImage3}/>
                <img className={`edit-img ${isClicked4 ? "img-clicked" : ""}`} src='./src/assets/default-img-4.jpg' alt='profile image 4' onClick={ChangeImage4}/>
                </div>
                <form onSubmit={handleProfileNameSubmit}>
                <div id='edit-page-input-container' >
                <input type='text' placeholder='Podaj imię' className='log-in-input' id='edit-input' minLength={1} maxLength={20} required
                        value={profileName} onChange={(e) => setProfileName(e.target.value)}/>
                </div>
                <div id='save-edit-changes-container'>
                <button className='edit-button' id='edit-button-1' type='submit'>Zapisz zmiany</button>
                </div>
                </form>   
                <div id='delete-cancel-container'>
                <a href='accounts-page.html' id='cancel-anchor'>
                <button className='edit-button' id='edit-button-2'>Anuluj</button>
                </a>
                <button className='edit-button' id='edit-button-3'>Usuń profil</button>
                </div>
            </div>
        </div>
    );
};
export default EBackground