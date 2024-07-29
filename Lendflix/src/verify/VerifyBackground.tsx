import { Icon, Text } from '@fluentui/react';
import { MailRegular, PaymentRegular, ShieldRegular, CheckmarkFilled} from '@fluentui/react-icons';


function VerifyBackground(){
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
    <div className='verify-container'>
        <ShieldRegular className='verify-shield-icon'/>
        <Icon iconName='StatusCircleCheckmark' className='verify-checkmark'/>
    <Text className='verify-page-title'>Najpierw musimy potwierdzić Twoją tożsamość</Text>
    <Text className='verify-page-info-text'>Zanim wprowadzisz zmiany, musimy się upewnić, że to na pewno Ty.</Text>
    <div className='verify-options-container'>

        <div className='verify-option-email-container'>
        <span className='verify-option-email-span'>
        <MailRegular className="verify-mail-icon"/>
        <div className='verify-option-email-text-container'>
    <Text className='verify-page-email-text'>Wyślij mi kod e-mailem</Text>
    <Text className='verify-page-email'>email@gmail.com</Text>
    </div>
    </span>
    <Icon iconName='ChevronRightMed' className='verify-arrow'/>
    </div>
    <div className='verify-options-line'/>
    <div className='verify-option-email-container'>
        <span className='verify-option-email-span'>
        <PaymentRegular className="verify-mail-icon"/>
        <div className='verify-option-email-text-container'>
    <Text className='verify-page-email-text'>Potwierdź informacje dotyczące płatności</Text>
    <Text className='verify-page-email'>MASTERCARD - ostatnie cyfry: 7458</Text>
    </div>
    </span>
    <Icon iconName='ChevronRightMed' className='verify-arrow'/>
    </div>
    </div>
    </div>
    </div>
    );
}
export default VerifyBackground