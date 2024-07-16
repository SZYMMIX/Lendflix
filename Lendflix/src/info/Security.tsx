import { Icon, Text } from '@fluentui/react';
import { Link } from "react-router-dom";
import { LockClosedRegular, MailRegular, PhoneRegular} from '@fluentui/react-icons';

function Security(){
    return(
        <div className="default-right-section-container">
        <Text className="info-right-title-text">Ochrona</Text>
        <Text className="info-right-text">Szczegóły konta</Text>
        <div className="right-info-options-container">
        <ul className="right-info-default-list">

            <li>
            <a className="right-info-default-link" href="password.html">
            <span>
            <LockClosedRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Hasło</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="email.html">
            <span>
            <MailRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">E-mail</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="phone.html">
            <span>
            <PhoneRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Telefon komórkowy</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

        </ul>
        </div>
        <button className='cancel-membership-btn' id='security-page-btn'>
            <Text className="info-right-option-text" id='cancel-membership-text'>Usuń konto</Text>
            </button>
        </div>
    );
}
export default Security