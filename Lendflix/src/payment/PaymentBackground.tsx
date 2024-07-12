import { Icon, Text } from '@fluentui/react';

function PaymentBackground(){
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
    <Text className='payment-page-title'>Zmień metodę płatności</Text>
    <div className='current-card-container'>
        <div className='current-card-text-container'>
    <Text className='credit-card-text'>Bieżąca metoda płatności</Text>
    </div>
    <div className='current-card-info-conatainer'>
    <img src='./src/assets/creditcard.png' className='master-card-img'/>
    <div className='credit-card-texts-info-container'>
    <Text className='credit-card-text'>Ostatnie cyfry: 7453</Text>
    <Text>Wygasa 25/08</Text>
    </div>
    </div>
    </div>
    <div className='payment-buttons-container'>
        <a>
        <button id='payment-btn-continue'><Text className='payment-buttons-text' id='payment-continue-text'>Zmień metodę płatności</Text></button>
        </a>
        <a href='account-info.html#/moje-konto'>
        <button id='payment-btn-cancel'><Text className='payment-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
        </a>
    </div>
    </div>
    </div>
    );
}
export default PaymentBackground