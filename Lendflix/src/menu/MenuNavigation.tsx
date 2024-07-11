import React, { useState } from 'react';
import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';

function MenuNavigation() {
  const [notificationsCount, setNotificationsCount] = useState(4);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isBellClicked, setIsBellClicked] = useState(false);
  const [isProfileHover, setIsProfileHover] = useState(false);

  function showSearchBar() {
    setIsSearchVisible(!isSearchVisible);
  }

function showNotifications(){
  setIsBellClicked(!isBellClicked);
  setNotificationsCount(0);
}

  return (
    <nav className="menu-navigation">
      <div className="nav-left">
        <div className="logo-container">
          <Link to="/strona-główna" className='link-navigation-menu'>
          <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' />
          </Link>
        </div>
        <div className="nav-options">
          <span className="profile-text">
          <Link to="/strona-główna" className='link-navigation-menu'>
            <Text className="nav-text-options">Strona główna</Text>
            </Link>
          </span>
          <span className="profile-text">
            <Link to="/seriale" className='link-navigation-menu'>
            <Text className="nav-text-options">Seriale</Text>
            </Link>
          </span>
          <span className="profile-text">
            <Link to="/filmy" className='link-navigation-menu'>
            <Text className="nav-text-options">Filmy</Text>
            </Link>
          </span>
        </div>
      </div>
      <div className="nav-right">
        <input
          type="text"
          className={`search-bar ${isSearchVisible ? 'search-vis' : ''}`}
          readOnly={!isSearchVisible}
          placeholder="Co chcesz obejrzeć?"
          id='searchBar'
        />
        <Icon iconName="Search" id="search-icon" onClick={showSearchBar} />
        <i className={`fas fa-bell notification-bell ${notificationsCount == 0 ? "without-notifications" : "with-notifications"}`} onClick={showNotifications}/>
        {notificationsCount > 0 && <span id='notifications-count-container' onClick={showNotifications} 
                                    className={notificationsCount > 9 ? "notifications-count-above-limit" : "notifications-count-below-limit"}>
        <Text id='notifications-count'>{notificationsCount > 9 ? `9+` : notificationsCount}</Text>
        </span>
        }
        
        {isBellClicked && !isProfileHover && <div className="hidden-div" id='notifications-hidden-div'>
          <div className='notifications-line'>
          </div>
          <ul id='notifications-list'>
            <li className='unfold-profiles-list-item'>
              <span className='notification-img-span'>
            <img src="/src/assets/default-img-1.jpg" className='menu-notifications-hidden-div-image'id='mockimg'/>
            </span>
              <Text className='notifications-hidden-div-text'>Kończy się czas wypożyczenia</Text>
              </li>
              <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-1.jpg" className='menu-notifications-hidden-div-image'/>
              <Text className='notifications-hidden-div-text'>Nowo dodane hity</Text>
              </li>
              <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-1.jpg" className='menu-notifications-hidden-div-image'/>
              <Text className='notifications-hidden-div-text'>Promocje specjalne</Text>
              </li>
              <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-1.jpg" className='menu-notifications-hidden-div-image'/>
              <Text className='notifications-hidden-div-text'>Filmy na weekend</Text>
              </li>
          </ul>
          </div>
        }
        <span id='profile-unfold' onMouseEnter={() => setIsProfileHover(true)} onMouseLeave={() => setIsProfileHover(false)}>
          <img src={"./src/assets/default-img-1.jpg"} alt="Profile" className="profile-picture" />
          <Icon iconName="TriangleDown12" id="unfold-icon" className={isProfileHover ? "rotate180" : ""}/>
        </span>
        {isProfileHover && <div className="hidden-div" onMouseEnter={() => setIsProfileHover(true)} onMouseLeave={() => setIsProfileHover(false)}>
          <ul>
            <li className='unfold-profiles-list-item' id='unfold-li1'>
              <img src="/src/assets/default-img-1.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User1</Text></li>
            <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-2.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User2</Text></li>
            <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-3.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User3</Text>
              </li>
            <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-4.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User4</Text>
              </li>
            <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-1.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User5</Text>
              </li>
            <li className='unfold-profiles-list-item'>
              <img src="/src/assets/default-img-2.jpg" className='menu-profile-hidden-div-image'/>
              <Text className='unfold-profiles-username-text'>User6</Text>
              </li>
              <li >
              <a href="accounts-page.html" className="unfold-profiles-list-item">
              <Icon iconName="Edit" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Zarządaj profilami</Text>
              </a>
              </li>
              <li >
              <a href='account-info.html#/moje-konto' className='unfold-profiles-list-item'>
              <Icon iconName="ShoppingCart" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Moje zakupy</Text>
              </a>
              </li>
              <li >
              <a href='account-info.html#/moje-konto' className='unfold-profiles-list-item'>
              <Icon iconName="Contact" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Konto</Text>
              </a>
              </li>
              <li >
              <a href="index.html" id='unfold-profiles-edit-last-anchor' className='unfold-profiles-list-item'>
              <Icon iconName="SignOut" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Wyloguj się</Text>
              </a>
              </li>
          </ul>
          </div>}
      </div>
    </nav>
  );
};

export default MenuNavigation;
