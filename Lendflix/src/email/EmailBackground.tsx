import { Icon, Text } from '@fluentui/react';

function EmailBackground(){
    return(
        <div className='email-container'>
        <div className='payment-back-button-container'>
            <a href='account-info.html#/moje-konto'>
            <button>
            <Icon iconName="Back" className="back-to-account-icon"/>
                <Text className='back-btn-text'>Konto </Text>
            </button>
            </a>
        </div>
        <div className='email-change-container'>
            <div className='giftcard-texts-container'>
        <Text className='email-page-title'>Zmień adres e‑mail konta</Text>
        <Text className='email-page-title-small'>Adres e‑mail konta służy do logowania się na wszystkie profile oraz przesyłania wiadomości e‑mail do właściciela konta.</Text>
        </div>
        <div className='email-page-inputs'>
        <input type='email' placeholder='Bieżący adres e-mail' minLength={5} maxLength={60} required/>
        <input type='email' placeholder='Nowy adres e-mail' minLength={5} maxLength={60} required/>
        </div>
        <div className='email-buttons-container'>
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
export default EmailBackground