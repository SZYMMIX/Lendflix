import { Icon, Text } from '@fluentui/react';

function LanguagesBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
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
        <Text className='languages-page-title-tremendous'>Ustaw preferencje językowe</Text>
        <div className='pemail-userdata-container'>
        <Text className='pemail-page-title-small'>Dla:  {currentUserData[0]}</Text>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="languages-img"/>
        </div>
        </div>
        <div className='password-page-inputs'>
        <input type='password' id='languages-input' placeholder='Język' minLength={6} maxLength={60} required/>
        </div>
        <div className='payment-buttons-container'>
            <a>
            <button id='payment-btn-continue'><Text className='payment-buttons-text' id='payment-continue-text'>Zapisz</Text></button>
            </a>
            <a href='account-info.html#/moje-konto'>
            <button id='payment-btn-cancel'><Text className='payment-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
            </a>
        </div>
        </div>
        </div>
    );
}
export default LanguagesBackground