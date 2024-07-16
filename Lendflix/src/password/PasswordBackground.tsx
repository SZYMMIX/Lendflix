import { Icon, Text } from '@fluentui/react';

function PasswordBackground(){
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
        <Text className='payment-page-title-tremendous'>Zmień hasło</Text>
        <Text className='payment-page-title-small'>Zabezpiecz konto niepowtarzalnym hasłem liczącym co najmniej 6 znaków.</Text>
        </div>
        <div className='password-page-inputs'>
        <input type='text' placeholder='Bieżące hasło' minLength={6} maxLength={60} required/>
        <input type='text' placeholder='Nowe hasło (6-60 znaków)' minLength={6} maxLength={60} required/>
        <input type='text' placeholder='Wprowadź ponownie nowe hasło' minLength={6} maxLength={60} required/>
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
export default PasswordBackground