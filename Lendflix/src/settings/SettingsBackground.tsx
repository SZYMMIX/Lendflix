import { Icon, Text } from '@fluentui/react';
import { LockClosedRegular, MailRegular, ErrorCircleRegular, HistoryRegular} from '@fluentui/react-icons';

function SettingsBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
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
        <Text className='options-page-user-text'>Dla: {currentUserData[0]}</Text>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="options-img"/>
        </div>
        </div>
        <div className="right-info-options-container">
    <ul className="right-info-default-list" id='options-list'>

        <li>
        <a className="right-info-default-link" href="lock.html">
        <span>
        <LockClosedRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Blokada profilu</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>

        <li>
        <a className="right-info-default-link" href="profile-email.html">
        <span>
        <MailRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">E-mail</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>

        <li>
        <a className="right-info-default-link" href="languages.html">
        <span>
        <Icon iconName='LocaleLanguage' className="info-right-option-icon-smaller"/>
        <Text className="info-right-option-text">Języki</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>

        <li>
        <a className="right-info-default-link" href="restrictions.html">
        <span>
        <ErrorCircleRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Ograniczenia oglądania</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>

        <li>
        <a className="right-info-default-link" href='watch-history.html'>
        <span>
        <HistoryRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Historia oglądania</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

    </ul>
    </div>
    <button className='cancel-membership-btn' id='delete-account-btn'>
            <Text className="info-right-option-text" id='cancel-membership-text'>Usuń profil</Text>
            </button>
        </div>
        </div>
    );
}
export default SettingsBackground