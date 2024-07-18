import { Icon, Text } from '@fluentui/react';
import { useState } from 'react';
import { ThumbLikeRegular, ThumbDislikeRegular, ThumbLikeFilled, ThumbDislikeFilled} from '@fluentui/react-icons';

function WatchBackground(){
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    const [isReviewClicked, setIsReviewClicked] = useState(false);

    return(
    <div className='history-page-container'>
        <div className='watch-user-info-container'>
        <Text className='watch-page-title'>Aktywność: {currentUserData[0]}</Text>
        <img src={`/src/assets/default-img-${currentUserData[1]}.jpg`} className="watch-img"/>
        </div>
        <div className='watch-history-options'>
        <Text className={`watch-page-text ${isReviewClicked ? "history-blue-text" : ""}`} onClick={() => setIsReviewClicked(false)}>Oglądasz</Text>
        <div className='watch-up-line'/>
        <Text className={`watch-page-text ${isReviewClicked ? "" : "history-blue-text" }`} onClick={() => setIsReviewClicked(true)}>Oceny</Text>
        </div>
        <div className='watch-line'/>
        {isReviewClicked ? <div>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>14.07.2024</Text>
        <Text className='watch-page-text'>Bridgerton</Text>
        </div>
        <span className='likes-container'>
        <ThumbDislikeFilled className='watch-like-icon dislike-icon'/>
        <ThumbLikeRegular className='watch-like-icon like-icon'/>
        </span>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>27.06.2024</Text>
        <Text className='watch-page-text'>Joker</Text>
        </div>
        <span className='likes-container'>
        <ThumbDislikeRegular className='watch-like-icon dislike-icon'/>
        <ThumbLikeFilled className='watch-like-icon like-icon'/>
        </span>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>14.06.2024</Text>
        <Text className='watch-page-text'>The Witcher</Text>
        </div>
        <span className='likes-container'>
        <ThumbDislikeRegular className='watch-like-icon dislike-icon'/>
        <ThumbLikeFilled className='watch-like-icon like-icon'/>
        </span>
        </div>
        </div> :
        <div>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>18.07.2024</Text>
        <Text className='watch-page-text'>The Last of Us: Sezon 1: Odcinek 1</Text>
        </div>
        <Icon iconName='Delete' className='watch-remove-icon'/>
        </div>
        <div className='watch-line'/>
        <div className='history-info-element'>
        <div className='watch-date-title-container'>
        <Text className='watch-page-text'>26.06.2024</Text>
        <Text className='watch-page-text'>Joker</Text>
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
        </div>}
    </div>
    );
};
export default WatchBackground
