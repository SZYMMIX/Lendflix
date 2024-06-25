import { Icon, Text } from '@fluentui/react';

function TextContainer(){
    return(
    <div className="img-background">
        <div className='texts-container'>
        <div className='start-text-container'>
        <Text variant="xxLarge" className='start-text'>Filmy, seriale i wiele więcej bez ograniczeń</Text>
         </div>
         <br/><br/><br/><br/><br/>
        <div className='sign-up-text'>
        <Text className='start-text1'>Zaczynamy oglądać?</Text>
        <br/><br/>
        <Text className='start-text1'>Wprowadź adres e‑mail, aby utworzyć konto.</Text>
        </div>
        <br/>
        <div className='sign-up-container'>
        <input type='email' name='email' minlength="5" maxlength="50" className='sign-up-input' placeholder='Adres e-mail'/>
        <br/>
        <button className='sign-up-button'>Rozpocznij {`❯`}</button>
        </div>
        </div>
     </div>
    );
};
export default TextContainer