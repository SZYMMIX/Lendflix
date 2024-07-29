import { Text } from '@fluentui/react';
import { useState } from 'react';
function RBackground(){
    interface User {
        email: string;
        password: string;
      }

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user:User = {email, password};
        setIsSubmitting(false);
        console.log(user);
        }
    
    return(
    <div className="register-img-background">
        <div id='register-background'>
        <div className="register-card">
            <Text className='start-text1' id='register-text'>Zarejestruj się</Text>
            <div className='register-inputs'>
            <form onSubmit={handleSubmit}>
            <input type='email' name='email' minLength={5} maxLength={50} className='register-input' 
                   id='register-input-email' placeholder='Adres e-mail' required
                   value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' minLength={6} maxLength={60} name='password' id='register-input-password' 
                   className='register-input' placeholder='Hasło' required
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='register-button-R' type='submit' disabled={isSubmitting}>Zarejestruj się</button>
            </form>
            <div className='forgot-password-container'>
            </div>
            <div className='newsletter-container'>
            <label className='checkbox' for="checkboxInput-register" id='register-label'>
            <input type='checkbox' className='checkbox-input' id='checkboxInput-register'/>
            <div className='checkbox-box'></div>
            </label>
            <div id='newsletter-text-container'>
            <Text className='start-text1' id='newsletter-text'>Nie chcę otrzymywać ofert specjalnych z serwisu Lendflix</Text>
            </div>
             </div>
            </div>
            </div>
        </div>   
    </div>
    );
};

export default RBackground