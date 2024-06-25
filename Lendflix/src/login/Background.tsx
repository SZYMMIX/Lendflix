import { Icon, Text } from '@fluentui/react';

function Background(){
 return(
    <div className="img-background" id="login-background">
        <div className="login-card">
        <Text className='start-text1' id='login-text'>Zaloguj się</Text>
        <div className='login-inputs'>
        <input type='email' name='email' minlength="5" maxlength="50" className='sign-up-input' id='login-input' placeholder='Adres e-mail'/>
        <input type='password' name='password' id='login-input' className='sign-up-input' placeholder='Hasło'/>
        <button className='login-button-L'>Zaloguj się</button>
        <Text className='forgot-password-text'>Nie pamiętasz hasła?</Text>
        </div>
        </div>
    </div>
 );
};

export default Background