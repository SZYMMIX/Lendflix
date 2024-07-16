import { Icon, Text } from '@fluentui/react';
import { Link } from "react-router-dom";
import { GiftCardRegular, PaymentRegular, CalendarEditRegular, HistoryRegular} from '@fluentui/react-icons';

function Payment(){
    return(
        <div className="default-right-section-container">
        <Text className="info-right-title-text">Członkostwo</Text>
        <Text className="info-right-text">Szczegóły planu</Text>
        <div className="right-info-options-container">
        <ul className="right-info-default-list">
            <li className='text-info-list-item' id='text-info-list-item-first'>
            <Text className="info-right-option-text" id='plan-title'>Plan Premium </Text> 
            <Text className="info-right-option-text" id='plan-text'>Rozdzielczość 4K z dźwiękiem 3D, oglądanie bez reklam i nie tylko.</Text>
            </li>
            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="change-plan.html">
            <span>
            <CalendarEditRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Zmień plan</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

        </ul>
        </div>
        <Text className="info-right-text">Informacje dotyczące płatności</Text>
        <div className="right-info-options-container">
        <ul className="right-info-default-list">
            <li className='text-info-list-item' id='text-info-list-item-first'>
            <Text className="info-right-option-text" id='plan-title'>Następna płatność </Text> 
            <Text className="info-right-option-text" id='plan-text'>28 lipca 2024</Text>
            <span className='credit-card-info'>
            <img src='./src/assets/creditcard.png' className='payment-card-img'/>
                <Text className='credit-card-info-text'>•••• •••• •••• 7453</Text>
            </span>
            </li>
            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="payment-methods.html">
            <span>
            <PaymentRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Zarządzaj metodami płatności</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="giftcard.html">
            <span>
            <GiftCardRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Zrealizuj kod podarunkowy lub promocyjny</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="billing.html">
            <span>
            <HistoryRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Wyświetl historię płatności</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

        </ul>
        </div>
        <button className='cancel-membership-btn'>
            <Text className="info-right-option-text" id='cancel-membership-text'>Anuluj członkostwo</Text>
            </button>
        </div>
    );
}
export default Payment