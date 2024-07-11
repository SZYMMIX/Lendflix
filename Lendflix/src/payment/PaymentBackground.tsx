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
    <Text>metoda płatności </Text>
    </div>
    </div>
    );
}
export default PaymentBackground