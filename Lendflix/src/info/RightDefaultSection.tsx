import { useState } from "react";
import { Icon, Text } from '@fluentui/react';
import { Link } from "react-router-dom";
import { PeopleRegular, PaymentRegular, LockClosedRegular, ContactCardRegular, CalendarEditRegular} from '@fluentui/react-icons';

function RightDefaultSection({ChangeRight2, ChangeRight4}){
    return(
    <div className="default-right-section-container">
    <Text className="info-right-title-text">Konto</Text>
    <Text className="info-right-text">Szczegóły członkostwa</Text>
    <div className="right-info-options-container">
        <ul className="right-info-default-list">
            <li className='text-info-list-item' id='text-info-list-item-first'>
            <Text className="info-right-option-text" id='plan-title'>Plan Premium </Text> 
            <Text className="info-right-option-text" id='plan-text'>Termin następnej płatności: 28 lipca 2024</Text>
            <span className='credit-card-info'>
            <img src='./src/assets/creditcard.png' className='payment-card-img' alt="Karta kredytowa: "/>
            <Text className='credit-card-info-text'>•••• •••• •••• 7453</Text>
            </span>
            </li>
            <div className="right-info-line"></div>
          
            <li>
            <Link to="/czlonkostwo" onClick={ChangeRight2} className="right-info-default-link">
            <span>
            <ContactCardRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Zarządzaj członkostwem</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </Link>
            </li>
  
        </ul>
        </div>
    <Text className="info-right-text">Szybkie łącza</Text>
    <div className="right-info-options-container">
    <ul className="right-info-default-list">
        
        <li>
        <a className="right-info-default-link" href="change-plan.html">
        <span>
        <CalendarEditRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zmień plan</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
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
        <a className="right-info-default-link" href="password.html">
        <span>
        <LockClosedRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zaktualizuj hasło</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>

        <li>
        <a className="right-info-default-link" href="settings.html">
        <span>
        <Icon iconName="Settings" className="info-right-option-icon-smaller"/>
        <Text className="info-right-option-text">Edytuj ustawienia</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </a>
        </li>

        <div className="right-info-line"></div>
  
          <li>
          <Link to="/profile" onClick={ChangeRight4} className="right-info-default-link">
        <span>
        <PeopleRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zarządzaj profilami</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </Link>
        </li>

    </ul>
    </div>
    </div>
    );
}
export default RightDefaultSection