import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { PaymentFilled, PaymentRegular, PeopleRegular, PeopleFilled} from '@fluentui/react-icons';
import { useState } from 'react';

function LeftSection(){
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    function ChangeRight1(){
        if (!isActive1)  setIsActive1(!isActive1);
        if(isActive2 || isActive3 || isActive4){
            setIsActive2(false);
            setIsActive3(false);
            setIsActive4(false);
        }
        }
        function ChangeRight2(){
            if (!isActive2)  setIsActive2(!isActive2);
            if(isActive1 || isActive3 || isActive4){
                setIsActive1(false);
                setIsActive3(false);
                setIsActive4(false);
            }
            }
        function ChangeRight3(){
            if (!isActive3)  setIsActive3(!isActive3);
            if(isActive1 || isActive2 || isActive4){
                setIsActive1(false);
                setIsActive2(false);
                setIsActive4(false);
            }
                }
        function ChangeRight4(){
            if (!isActive4)  setIsActive4(!isActive4);
            if(isActive1 || isActive2 || isActive3){
                setIsActive1(false);
                setIsActive2(false);
                setIsActive3(false);
            }
         }
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
         </ul>
        </div>
    );
}
export default LeftSection