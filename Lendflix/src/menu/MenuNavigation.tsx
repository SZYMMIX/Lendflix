import React, { useState } from 'react';
import { Icon, Text } from '@fluentui/react';

function MenuNavigation() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function showSearchBar() {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <nav className="menu-navigation">
      <div className="nav-left">
        <div className="logo">
          <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' />
        </div>
        <div className="nav-options">
          <span className="profile-text">
            <Text className="nav-text-options">Strona główna</Text>
          </span>
          <span className="profile-text">
            <Text className="nav-text-options">Seriale</Text>
          </span>
          <span className="profile-text">
            <Text className="nav-text-options">Filmy</Text>
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
        <span id='profile-unfold'>
          <img src={"./src/assets/default-img-1.jpg"} alt="Profile" className="profile-picture" />
          <Icon iconName="TriangleDown12" id="unfold-icon" />
        </span>
      </div>
    </nav>
  );
}

export default MenuNavigation;
