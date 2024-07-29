import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import LeftSection from './LeftSection';

function InfoHeader ({ ChangeRight4, ChangeRight1}){
    const [isAccountImageClicked, setIsAccountImageClicked] = useState(false);
    const currentUserDataList = JSON.parse(localStorage.getItem('currentUser'));
    const accountBoxRef = useRef<HTMLDivElement>(null);
    const accountButtonRef = useRef<HTMLDivElement>(null);
    function handleInfoButtonClick(){
    setIsAccountImageClicked(!isAccountImageClicked);
    }

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (accountBoxRef.current && !accountBoxRef.current.contains(event.target as Node) && !accountButtonRef.current.contains(event.target as Node)) {
          setIsAccountImageClicked(false);
        }
      }
    
      if (isAccountImageClicked) {
        document.addEventListener('mouseup', handleClickOutside);
      } else {
        document.removeEventListener('mouseup', handleClickOutside);
      }
    
      return () => {
        document.removeEventListener('mouseup', handleClickOutside);
      };
    }, [isAccountImageClicked]);

    return (
      <header className="info-header" id='info-header'>
      <div className="info-logo-container" id='logo-container'>
         <a href="./menu.html#/strona-główna" id='info-anchor'>
        <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-info-logo' id='lendflix-info-logo'/>
        </a>
      </div>
      <div className="actions" id="info-actions">
        <div className="account-button" id='info-button' onClick={handleInfoButtonClick} ref={accountButtonRef}>
          <img src={`/src/assets/default-img-${currentUserDataList[1]}.jpg`} className="info-header-img"/>
          <Icon iconName="TriangleDown12" id="unfold-info-icon" className={isAccountImageClicked ? "rotate180" : ""}/>
        </div>
      </div>
      {isAccountImageClicked && <div className="hidden-div" id='info-hidden-div' ref={accountBoxRef} > 
          <ul id='info-account-list'>
            <li className='unfold-profiles-list-item' id='first-info-item'>
                <a href="./menu.html#/strona-główna">
            <Icon iconName="Back" className="unfold-info-icon"/>
              <Text className='info-hidden-div-text'>Wróć do serwisu Lendflix</Text>
              </a>
              </li>
              <li className='unfold-profiles-list-item' >
              <Link to="/moje-konto" onClick={ChangeRight1}>
              <Icon iconName="Contact" className="unfold-info-icon"/>
              <Text className='info-hidden-div-text'>Konto</Text>
              </Link>
              </li>
              <li className="unfold-profiles-list-item">
              <Link to="/profile" onClick={ChangeRight4}>
              <Icon iconName="Edit" className='unfold-info-icon' />
              <Text className='info-hidden-div-text'>Zarządaj profilami</Text>
              </Link>
              </li>
              <li className='unfold-profiles-list-item' id='last-info-item' >
              <a href="accounts-page.html" >
              <Icon iconName="People" className='unfold-info-icon' id='people-icon'/>
              <Text className='info-hidden-div-text'>Przełącz profil</Text>
              </a>
              </li>
              <li className='unfold-profiles-list-item' id='last-info-item' >
              <a href="index.html" onClick={() => localStorage.clear()}>
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