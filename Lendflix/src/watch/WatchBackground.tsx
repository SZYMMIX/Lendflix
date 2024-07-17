import { Icon, Text } from '@fluentui/react';

function WatchBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));

    return(
    <div className='history-page-container'>
        <div className='watch-user-info-container'>
        <Text className='watch-page-title'>Aktywność: {currentUserData[0]}</Text>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="watch-img"/>
        </div>
        <div className='watch-history-options'>
        <Text className='watch-page-text'>Oglądasz</Text>
        <div className='watch-up-line'/>
        <Text className='watch-page-text'>Oceny</Text>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>12.06.2024</Text>
        <Text className='watch-page-text'>The Witcher: Sezon 1: Dziki gon</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>12.06.2024</Text>
        <Text className='watch-page-text'>The Witcher: Sezon 1: Dziki gon</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>12.06.2024</Text>
        <Text className='watch-page-text'>The Witcher: Sezon 1: Dziki gon</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
    </div>
    );
};
export default WatchBackground
