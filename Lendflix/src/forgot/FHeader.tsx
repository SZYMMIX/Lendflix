

function FHeader (){
    return (
      <header className="header">
      <div className="logo">
      <a href="../../index.html">
      <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' id="forgot-logo"/>
      </a>
     </div>
      <div className="actions">
        <div className="login-button">
          <a href='login-page.html'>
          <button className='header-log-in-button' id="forgot-login-button">Zaloguj się</button>
          </a> 
        </div>
      </div>
    </header>
    );
  };
  
  export default FHeader;
  