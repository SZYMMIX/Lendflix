import { Icon, Text } from '@fluentui/react';
function Footer(){
    return(
        <>
        <footer className="footer">
        <Text className='start-text1' id='author-site'>Szymon Cimochowski &copy; 2024</Text>
        <a href='https://github.com/SZYMMIX' target='_blank' className='anchor-github-icon'>
        <img src='./src/assets/github-mark-white.png' alt='github link' id='github-icon'/>
        </a> 
        <a href='https://pl.linkedin.com/in/szymon-cimochowski-a9a003242' target='_blank' id='linkedin-link'>
        <Icon iconName="LinkedInLogo" id='linkedin-icon'/>
        </a>
        </footer>
        </>
    
    );
};

export default Footer