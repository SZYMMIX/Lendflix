import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { PaymentFilled, PaymentRegular, PeopleRegular, PeopleFilled, CartRegular, CartFilled} from '@fluentui/react-icons';
import { useState } from 'react';

function LeftSection({ isActive1, isActive2, isActive3, isActive4, isActive5, ChangeRight1, ChangeRight2, ChangeRight3, ChangeRight4, ChangeRight5}){
    
    return(
        <div className='left-section-buttons-div'>
         <ul className='left-section-list'>
            <li id='first-left-list-item'>
            <a href="./menu.html#/strona-główna">
            <Icon iconName="Back" className="left-info-icon"/>
              <Text className='info-hidden-div-text' id='go-back'>Wróć do serwisu Lendflix</Text>
              </a>
            </li>
            <Link to="/moje-konto"  className='left-list-item' onClick={ChangeRight1}>
            <li >
            
            <Icon iconName={isActive1 ? "HomeSolid" : "Home"} className="left-info-icon" id='left-home-icon'/>
            <Text className='info-hidden-div-text' id='go-back'>Ogólne informacje</Text>
            </li>
            </Link>

            <Link to="/członkostwo"  className='left-list-item' onClick={ChangeRight2}>
            <li >
            {isActive2 ? <PaymentFilled className="left-info-icon" id='payment-card'/> : <PaymentRegular className="left-info-icon" id='payment-card'/>}
              <Text className='info-hidden-div-text' id='go-back'>Członkostwo</Text>
            </li>
            </Link>

            <Link to="/ochrona"  className='left-list-item' onClick={ChangeRight3}>
            <li >
            <Icon iconName={isActive3 ? "ShieldSolid" : "Shield"} className="left-info-icon"/>
              <Text className='info-hidden-div-text' id='go-back'>Ochrona</Text>
            </li>
            </Link>
            <Link to="/profile"  className='left-list-item' onClick={ChangeRight4}>
            <li >
            {isActive4 ? <PeopleFilled className="left-info-icon" id='profile-people'/> : <PeopleRegular className="left-info-icon" id='profile-people'/>}
              <Text className='info-hidden-div-text' id='go-back'>Profile</Text>
            </li>
            </Link>
            <Link to="/wypożyczenia"  className='left-list-item' onClick={ChangeRight5}>
            <li >
            {isActive5 ? <CartFilled className="left-info-icon" id='profile-shop'/> : <CartRegular className="left-info-icon" id='profile-shop'/>}
              <Text className='info-hidden-div-text' id='go-back'>Moje zakupy</Text>
            </li>
            </Link>
         </ul>
        </div>
    );
}
export default LeftSection