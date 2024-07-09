import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function InfoHeader (){
    const [isAccountImageClicked, setIsAccountImageClicked] = useState(false);
    function handleInfoButtonClick(){
    setIsAccountImageClicked(!isAccountImageClicked);
    }
    return (
      <header className="info-header" id='info-header'>
      <div className="logo" id='index-logo'>
         <a href="./menu.html#/strona-główna" id='info-anchor'>
        <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' id='lendflix-logo'/>
        </a>
      </div>
      <div className="actions" id="info-actions">
        <div className="account-button" id='info-button' onClick={handleInfoButtonClick}>
          <img src="/src/assets/default-img-1.jpg" className="info-header-img"/>
          <Icon iconName="TriangleDown12" id="unfold-info-icon" className={isAccountImageClicked ? "rotate180" : ""}/>
        </div>
      </div>
      {isAccountImageClicked && <div className="hidden-div" id='info-hidden-div'>
          <ul id='info-account-list'>
            <li className='unfold-profiles-list-item' id='first-info-item'>
                <a href="./menu.html#/strona-główna">
            <Icon iconName="Back" className="unfold-info-icon"/>
              <Text className='info-hidden-div-text'>Wróć do serwisu Lendflix</Text>
              </a>
              </li>
              <li className='unfold-profiles-list-item' >
              <Link to="/moje-konto">
              <Icon iconName="Contact" className="unfold-info-icon"/>
              <Text className='info-hidden-div-text'>Konto</Text>
              </Link>
              </li>
              <li className="unfold-profiles-list-item">
              <a href="accounts-page.html" >
              <Icon iconName="Edit" className='unfold-info-icon' />
              <Text className='info-hidden-div-text'>Zarządaj profilami</Text>
              </a>
              </li>
              <li className='unfold-profiles-list-item' id='last-info-item' >
              <a href="accounts-page.html" >
              <Icon iconName="People" className='unfold-info-icon' id='people-icon'/>
              <Text className='info-hidden-div-text'>Przełącz profil</Text>
              </a>
              </li>
              <li className='unfold-profiles-list-item' id='last-info-item' >
              <a href="index.html" >
              <Icon iconName="SignOut" className='unfold-info-icon' />
              <Text className='info-hidden-div-text'>Wyloguj się</Text>
              </a>
              </li>
          </ul>
          </div>
        }
    </header>
    );
  };
  
  export default InfoHeader;