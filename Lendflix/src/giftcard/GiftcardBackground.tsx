import { Icon, Text } from '@fluentui/react';

function GiftcardBackground(){
    return(
        <div className='payment-container'>
        <div className='payment-back-button-container'>
            <a href='account-info.html#/moje-konto'>
            <button>
            <Icon iconName="Back" className="back-to-account-icon"/>
                <Text className='back-btn-text'>Konto </Text>
            </button>
            </a>
        </div>
        <div className='method-payment-container'>
            <div className='giftcard-texts-container'>
        <Text className='payment-page-title-bigger'>Odbierz prezent</Text>
        <Text className='payment-page-title'>Aby rozpocząć, wprowadź swój kod poniżej.</Text>
        </div>
        <input type='text' className='giftcard-input' placeholder='Kod lub PIN' required/>
        <div className='payment-buttons-container'>
            <a>
            <button id='payment-btn-continue'><Text className='payment-buttons-text' id='payment-continue-text'>Zrealizuj</Text></button>
            </a>
            <a href='account-info.html#/moje-konto'>
            <button id='payment-btn-cancel'><Text className='payment-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
            </a>
        </div>
        </div>
        </div>
    );
}
export default GiftcardBackground