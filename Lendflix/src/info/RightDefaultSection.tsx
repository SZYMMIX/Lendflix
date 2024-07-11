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
            <Text className="info-right-option-text" id='plan-text'>Rozdzielczość 4K z dźwiękiem 3D, oglądanie bez reklam i nie tylko.</Text>
            </li>
            <div className="right-info-line"></div>
            <Link to="/członkostwo" onClick={ChangeRight2} className="right-info-default-link">
            <li>
            <span>
            <ContactCardRegular className="info-right-option-icon"/>
            <Text className="info-right-option-text">Zarządzaj członkostwem</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </li>
            </Link>
        </ul>
        </div>
    <Text className="info-right-text">Szybkie łącza</Text>
    <div className="right-info-options-container">
    <ul className="right-info-default-list">
        <a className="right-info-default-link" href="change-plan.html">
        <li>
        <span>
        <CalendarEditRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zmień plan</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="payment-methods.html">
        <li>
        <span>
        <PaymentRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zarządzaj metodami płatności</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="password.html">
        <li>
        <span>
        <LockClosedRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zaktualizuj hasło</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <a className="right-info-default-link" href="settings.html">
        <li>
        <span>
        <Icon iconName="Settings" className="info-right-option-icon-smaller"/>
        <Text className="info-right-option-text">Edytuj ustawienia</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </a>
        <div className="right-info-line"></div>
        <Link to="/profile" onClick={ChangeRight4} className="right-info-default-link">
        <li>
        <span>
        <PeopleRegular className="info-right-option-icon"/>
        <Text className="info-right-option-text">Zarządzaj profilami</Text>
        </span>
        <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
        </li>
        </Link>
    </ul>
    </div>
    </div>
    );
}
export default RightDefaultSection