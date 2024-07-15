import { Icon, Text } from '@fluentui/react';
import { LockClosedRegular, MailRegular, ErrorCircleRegular, HistoryRegular} from '@fluentui/react-icons';

function SettingsBackground(){
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
        <div className='edit-options-container'>
        <div className='options-user-container'>
        <Text className='options-page-title'>Ustawienia profilu</Text>
        <div className='options-user-and-image'>
        <Text className='options-page-user-text'>Dla: User 1</Text>
        <img src={`/src/assets/default-img-1.jpg`} className="options-img"/>
        </div>
        </div>
        <div className="right-info-options-container">
    <ul className="right-info-default-list" id='options-list'>
        <a className="right-info-default-link" href="change-plan.html">
        <li>
        <span>
        <LockClosedRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Blokada profilu</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="payment-methods.html">
        <li>
        <span>
        <MailRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">E-mail</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="password.html">
        <li>
        <span>
        <Icon iconName='LocaleLanguage' className="info-right-option-icon-smaller"/>
        <Text className="info-right-option-text">Języki</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="settings.html">
        <li>
        <span>
        <ErrorCircleRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Ograniczenia oglądania</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link">
        <li>
        <span>
        <HistoryRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Historia oglądania</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
    </ul>
    </div>
    <button className='cancel-membership-btn' id='delete-account-btn'>
            <Text className="info-right-option-text" id='cancel-membership-text'>Usuń konto</Text>
            </button>
        </div>
        </div>
    );
}
export default SettingsBackground