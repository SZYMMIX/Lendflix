import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';


function Background(){
    
    interface User {
        email: string;
        password: string;
      }

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const user:User = {email, password};
        }
    

 return(
    <div className="img-background" id='login-img-background'>
        <div id="login-background">
            <div className="login-card">
            <Text className='start-text1' id='login-text'>Zaloguj się</Text>
            <div className='login-inputs'>
            <form onSubmit={handleSubmit}>
            <input type='email' name='email' minLength={5} maxLength={50} className='log-in-input' 
                   id='login-input-email' placeholder='Adres e-mail' required
                   value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' minLength={6} maxLength={60} name='password' id='login-input-password' 
                   className='log-in-input' placeholder='Hasło' required
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='login-button-L' type='submit'>Zaloguj się</button>
            </form>
            <div className='forgot-password-container'>
            <a href='forgot-password.html'>
            <Text className='forgot-password-text'>Nie pamiętasz hasła?</Text>
            </a>
            </div>
            <div className='remember-user-container'>
            <label class="checkbox-container">
            <input type='checkbox' className='checkbox'/>
            <span class="checkmark"></span>
            </label>
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