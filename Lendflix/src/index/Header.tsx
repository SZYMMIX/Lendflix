import * as React from 'react';

function Header (){
  return (
    <header className="header" id='index-header'>
    <div className="logo" id='index-logo'>
      <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' id='lendflix-logo'/>
    </div>
    <div className="actions">
      <div className="login-button">
        <a href='login-page.html'>
        <button className='header-login-button' id='header-login-button'>Zaloguj się</button>
        </a> 
      </div>
    </div>
  </header>
  );
};

export default Header;
