import * as React from 'react';
//import {MockData} from './../model/mock-data';
//import {data} from './../mock.json';


function Header (){
  return (
    <header className="header">
    <div className="logo">
      <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo'/>
    </div>
    <div className="actions">
      <div className="login-button">
        <a href='login-page.html'>
        <button>Zaloguj się</button>
        </a> 
      </div>
    </div>
  </header>
  );
};

export default Header;
