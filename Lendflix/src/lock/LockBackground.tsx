import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';

function LockBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    const [isContinueClicked, setIsContinueClicked] = useState(false);
    return(
        <div className='password-container'>
        <div className='payment-back-button-container'>
            <a href='account-info.html#/moje-konto'>
            <button>
            <Icon iconName="Back" className="back-to-account-icon"/>
                <Text className='back-btn-text'>Konto </Text>
            </button>
            </a>
        </div>
        <div className='password-change-container'>
            <div className='giftcard-texts-container'>
        <Text className='payment-page-title-tremendous' id='lock-title'>Blokada profilu</Text>
        <div className='verifyp-text-img-container'>
        {isContinueClicked ? <Text className='lock-page-hidden-text'>Ustaw blokadę profilu,
                             wybierając 4-cyfrowy kod PIN.</Text> : 
                            <Text className='payment-page-title-small'>Wprowadź hasło do konta, 
                            aby edytować blokadę profilu użytkownika {currentUserData[0]}</Text>}
       
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="verifyp-img"/>
        </div>
        </div>
        <div className='password-page-inputs'>
        {isContinueClicked ?  <input type="checkbox" id='lock-checkbox' required/> :
        <input type='password' placeholder='Bieżące hasło' id='verifyp-input' minLength={6} maxLength={60} required/>}
        
        </div>
        <div className='payment-buttons-container'>
            <a>
            <button id='payment-btn-continue'><Text className='payment-buttons-text' id='payment-continue-text' onClick={() => setIsContinueClicked(true)}>
            {isContinueClicked ? 'Zapisz' : 'Kontynuuj'}
                </Text></button>
            </a>
            <a href='account-info.html#/moje-konto'>
            <button id='payment-btn-cancel'><Text className='payment-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
            </a>
        </div>
        </div>
        </div>
    );
}
export default LockBackground