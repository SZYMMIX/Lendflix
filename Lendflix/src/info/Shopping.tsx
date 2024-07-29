import {Text, Icon} from '@fluentui/react'

function Shopping(){
    return(
        <div className='default-right-section-container'>
        <Text className="info-right-title-text" id='lend-page-title'>Historia wypożyczeń</Text>
        <div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text lend-page-history-text'>20.07.2024 — 23.07.2024</Text>
        <Text className='watch-page-text'>Fight Club</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text lend-page-history-text'>19.06.2024 — 22.06.2024</Text>
        <Text className='watch-page-text'>Aladdin</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text lend-page-history-text'>11.06.2024 — 14.06.2024</Text>
        <Text className='watch-page-text'>Joker</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        </div>
        </div>
    );
}
export default Shopping