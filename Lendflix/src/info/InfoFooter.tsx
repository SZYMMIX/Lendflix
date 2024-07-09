import { Icon, Text } from '@fluentui/react';
function InfoFooter(){
    return(
        <>
        <footer className="footer" id='info-footer'>
        <Text className='start-text1' id='info-site'>Szymon Cimochowski &copy; 2024</Text>
        <a href='https://github.com/SZYMMIX' target='_blank'>
        <img src='./src/assets/github-mark.png' alt='github link' id='github-icon'/>
        </a> 
        <a href='https://pl.linkedin.com/in/szymon-cimochowski-a9a003242' target='_blank' id='linkedin-link'>
        <Icon iconName="LinkedInLogo" id='linkedin-icon'/>
        </a>
        </footer>
        </>
    
    );
};

export default InfoFooter