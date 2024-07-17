import { Icon, Text } from '@fluentui/react';

function RestrictionsBackground(){
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
        <Text className='payment-page-title-tremendous' id='restrict-title'>Ograniczenia oglądania</Text>
        <div className='restrict-text-img-container'>
        <Text className='restrict-page-title-small'>Wprowadź hasło do konta, aby edytować profilowe kategorie wiekowe i ograniczenia tytułów dla profilu użytkownika {currentUserData[0]}</Text>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="restrict-img"/>
        </div>
        </div>
        <div className='password-page-inputs'>
        <input type='password' placeholder='Bieżące hasło' id='verifyp-input' minLength={6} maxLength={60} required/>
        </div>
        <div className='payment-buttons-container'>
            <a>
            <button id='payment-btn-continue'><Text className='payment-buttons-text' id='payment-continue-text'>Kontynuuj</Text></button>
            </a>
            <a href='account-info.html#/moje-konto'>
            <button id='payment-btn-cancel'><Text className='payment-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
            </a>
        </div>
        </div>
        </div>
    );
}
export default RestrictionsBackground