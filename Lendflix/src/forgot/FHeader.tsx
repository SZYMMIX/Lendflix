

function FHeader (){
    return (
      <header className="header">
        <a href="../../index.html" className="logo-container">
      <div >
      <img src={"./src/assets/lendflixlogo.png"} alt="Netflix" className='lendflix-logo' id="forgot-logo"/>   
     </div>
     </a>
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
  