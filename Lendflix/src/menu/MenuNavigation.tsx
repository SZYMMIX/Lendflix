import React, { useState } from 'react';
import { Icon, Text } from '@fluentui/react';
import { Link } from 'react-router-dom';

function MenuNavigation() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isProfileHover, setIsProfileHover] = useState(false);

  function showSearchBar() {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <nav className="menu-navigation">
      <div className="nav-left">
        <div className="logo">
          <Link to="/menu.html" className='link-navigation-menu'>
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
        <i className="fas fa-bell notification-bell" />
        <span id='notifications-count-container'>
        <Text id='notifications-count'>9</Text>
        </span>
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
              <Link to="/kupione-produkty" className='unfold-profiles-list-item'>
              <Icon iconName="ShoppingCart" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Moje zakupy</Text>
              </Link>
              </li>
              <li >
              <Link to="/konto" className='unfold-profiles-list-item'>
              <Icon iconName="UserOptional" className='unfold-profiles-icon' />
              <Text className='unfold-profiles-manage-text'>Moje dane</Text>
              </Link>
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
}

export default MenuNavigation;
