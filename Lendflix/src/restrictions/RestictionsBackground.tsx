import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';
function RestrictionsBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    const [isContinueClicked, setIsContinueClicked] = useState(false);
    return(
        <div className='restrict-container'>
        <div className='payment-back-button-container'>
            <a href='account-info.html#/moje-konto'>
            <button>
            <Icon iconName="Back" className="back-to-account-icon"/>
                <Text className='back-btn-text'>Konto </Text>
            </button>
            </a>
        </div>
        <div className='restrict-change-container'>
            <div className='giftcard-texts-container'>
        <Text className='payment-page-title-tremendous' id='restrict-title'>Ograniczenia oglądania</Text>
        <div className='restrict-text-img-container'>
            {isContinueClicked ? <Text className='restrict-page-title'>Profilowe kategorie wiekowe dla: {currentUserData[0]}</Text> :
        <Text className='restrict-page-title-small'>Wprowadź hasło do konta, aby edytować profilowe kategorie wiekowe i ograniczenia tytułów dla profilu użytkownika {currentUserData[0]}</Text>}
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="restrict-img"/>
        </div>
        {isContinueClicked && <div className='hidden-text-pegi-container'>
        <Text className='restrict-page-title-small'>Wyświetlaj w tym profilu tytuły z wszystkich kategorii wiekowych.</Text>
        <div>
            <input type='radio'/>
            <input type='radio'/>
            <input type='radio'/>
            <input type='radio'/>
            <input type='radio'/>
            </div>
            </div>}
        </div>
        {isContinueClicked && <div>
        <div className='restrict-line'/>
        <div className='restrict-hidden-texts-container'>
         <Text className='restrict-page-title'>Ograniczenia tytułów dla: {currentUserData[0]}</Text>
         <Text className='restrict-page-title-small' id='restrict-specific-text'>W tym profilu niektóre tytuły nie będą wyświetlane, niezależnie od kategorii wiekowej.</Text>
         </div>
         </div>}
        <div className='restrict-page-inputs'>
        <input type='password' placeholder={isContinueClicked ? 'Wpisz tytuł filmu lub serialu' :'Bieżące hasło'} id='verifyp-input' minLength={6} maxLength={60} required/>
        </div>
        <div className='restrict-buttons-container'>
            <a>
            <button id='payment-btn-continue' onClick={() => setIsContinueClicked(true)}><Text className='restrict-buttons-text' id='payment-continue-text'>
            {isContinueClicked ? 'Zapisz' : 'Kontynuuj'}
                </Text></button>
            </a>
            <a href='account-info.html#/moje-konto'>
            <button id='payment-btn-cancel'><Text className='restrict-buttons-text' id='payment-cancel-text'>Anuluj</Text></button>
            </a>
        </div>
        </div>
        </div>
    );
}
export default RestrictionsBackground