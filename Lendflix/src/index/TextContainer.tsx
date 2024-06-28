import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';

function TextContainer(){
    const [email, setEmail] = useState<string>("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
    <div className="img-background" id='background-img-index'>
        <div className='texts-container'>
        <div className='start-text-container' id='start-text-container-index'>
        <Text variant="xxLarge" className='start-text'>Filmy, seriale i wiele więcej bez ograniczeń</Text>
         </div>
         <br/><br/><br/><br/><br/>
         <div className='smaller-screens-container-index'>
        <div className='sign-up-text'>
        <Text className='start-text1'>Zaczynamy oglądać?</Text>
        <br/><br/>
        <Text className='start-text1'>Wprowadź adres e‑mail, aby utworzyć konto.</Text>
        </div>
        <br/>
        <div className='sign-up-container'>
        <form onSubmit={handleSubmit}>
        <input type='email' name='email' minLength={5} maxLength={50} 
               className='sign-up-input' placeholder='Adres e-mail' required
               value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        
        <button className='sign-up-button' id='index-page-sign-up-button' type='submit'>Rozpocznij &nbsp; {`❯`}</button>
        
        
        </form>     
        </div>
        </div>
        </div>
     </div>
    );
};
export default TextContainer
