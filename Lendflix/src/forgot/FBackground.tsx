import { Text } from '@fluentui/react';
function FBackground(){
return(
<div className="forgot-img-background">
    <div id="login-background">
        <div className="login-card" id='forgot-card'>
        <Text className='start-text1' id='forgot-text'>Zmień hasło</Text>
        <Text className='start-text1' id='forgot-info'>Wyślemy do Ciebie wiadomość e-mail z instrukcją resetowania hasła.</Text>
        <form>
        <input type='email' name='email' minLength={5} maxLength={50} 
               className='sign-up-input' placeholder='Adres e-mail' required 
               id='forgot-input'/>
        <button id='forgot-button'>Wyślij wiadomość e-mail</button>
        </form>       
        </div>
     </div>
</div>
);
};
export default FBackground