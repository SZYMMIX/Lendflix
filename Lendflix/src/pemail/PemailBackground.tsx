import { Icon, Text } from '@fluentui/react';

function PemailBackground(){
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
        <div className='pemail-change-container'>
            <div className='giftcard-texts-container'>
        <Text className='pemail-page-title-tremendous'>Dodaj adres e-mail profilu</Text>
        <Text className='pemail-page-title-small'>Zaproponujemy Ci coś ciekawego do obejrzenia i poinformujemy o nowych funkcjach, ofertach specjalnych oraz ankietach.</Text>
        <div className='pemail-userdata-container'>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="pemail-img"/>
        <Text className='pemail-page-title-small'>{currentUserData[0]}</Text>
        </div>
        </div>
        <div className='password-page-inputs'>
        <input type='email' id='pemail-input' placeholder='Adres e-mail' minLength={6} maxLength={60} required/>
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
export default PemailBackground