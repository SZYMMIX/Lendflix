import { Icon, Text } from '@fluentui/react';
import { Link } from "react-router-dom";


function Profiles(){
    return(
        <div className="default-right-section-container">
        <Text className="info-right-title-text">Profile</Text>
        <Text className="info-right-text">Ustawienia profilu</Text>
        <div className="right-info-options-container">
        <ul className="right-info-default-list">
  
            <li>
            <a className="right-info-default-link" href="settings.html">
                <span>
            <img src="/src/assets/default-img-1.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User1</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="settings.html">
            <span>
            <img src="/src/assets/default-img-2.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User2</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>
 
            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="settings.html">
            <span>
            <img src="/src/assets/default-img-3.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User3</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="settings.html">
            <span>
            <img src="/src/assets/default-img-4.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User4</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="settings.html">
            <span>
            <img src="/src/assets/default-img-1.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User5</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

            <div className="right-info-line"></div>

            <li>
            <a className="right-info-default-link" href="settings.html">
            <span>
            <img src="/src/assets/default-img-2.jpg" className='info-profiles-image'/>
            <Text className="info-right-option-text text-bolded">User6</Text>
            </span>
            <Icon iconName='ChevronRightMed' className='info-options-arrow'/>
            </a>
            </li>

        </ul>
        </div>
        </div>
    );
}
export default Profiles