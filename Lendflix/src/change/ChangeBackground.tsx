import { Text } from '@fluentui/react';

function ChangeBackground(){
    return(
    <div className='change-background-container'>
        <Text className='change-plan-title-text'>Zmień plan</Text>
        <div className='plan-options-container'>

        <label className='checkbox' for="checkboxInput-plan-default" id='default-plan-label'>
        <input type='checkbox' className='checkbox-input' id='checkboxInput-plan-default'/>
        <div className='checkbox-box'></div>
        </label>

        <label className='checkbox' for="checkboxInput-plan-standard" id='standard-plan-label'>
        <input type='checkbox' className='checkbox-input' id='checkboxInput-plan-standard'/>
        <div className='checkbox-box'></div>
        </label>

        <label className='checkbox' for="checkboxInput-plan-premium" id='premium-plan-label'>
        <input type='checkbox' className='checkbox-input' id='checkboxInput-plan-premium'/>
        <div className='checkbox-box'></div>
        </label>
        
        </div>

        <div className='rules-change-container'>
        <Text>Dostępność materiałów w jakości HD (720p), Full HD (1080p), Ultra HD (4K) i HDR zależy od Twojego dostawcy 
              internetu oraz od możliwości urządzenia, z którego korzystasz.
              Nie wszystkie materiały są dostępne we wszystkich rozdzielczościach lub z dźwiękiem 3D.</Text>
        </div>

        <div className='change-plan-buttons'>
            <a href='account-info.html#/moje-konto'>
            <button className='change-plan-btn' id='change-plan-back-btn'><Text className='change-plan-btn-text' id='plan1'>Wstecz</Text></button>
            </a>
            <button className='change-plan-btn' id='change-plan-continue-btn'><Text className='change-plan-btn-text' id='plan2'>Kontynuuj</Text></button>
        </div>
    </div>
    );
}
export default ChangeBackground