import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';


function Background(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {

    }

 return(
    <div className="img-background">
        <div id="login-background">
            <div className="login-card">
            <Text className='start-text1' id='login-text'>Zaloguj się</Text>
            <div className='login-inputs'>
            <form onSubmit={handleSubmit}>
            <input type='email' name='email' minlength='5' maxlength="50" className='log-in-input' 
                   id='login-input-email' placeholder='Adres e-mail' required
                   value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' name='password' id='login-input-password' 
                   className='log-in-input' placeholder='Hasło' required
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='login-button-L'>Zaloguj się</button>
            </form>
            <div className='forgot-password-container'>
            <a href='forgot-password.html'>
            <Text className='forgot-password-text'>Nie pamiętasz hasła?</Text>
            </a>
            </div>
            <div className='remember-user-container'>
            <input type='checkbox' className='checkbox'/>
            <Text className='start-text1' id='remember-user-text'>Zapamiętaj mnie</Text>
            </div>
            <Text className='start-text1' id='new-member-text'>Nie masz jeszcze konta w serwisie Lendflix?</Text>
            <div className='register-container-L'>
            <a href='index.html'>
            <Text className='register-text-L'>Zarejestruj się.</Text>
            </a>
            </div>
            </div>
            </div>
        </div>
        
    </div>
 );
};

export default Background