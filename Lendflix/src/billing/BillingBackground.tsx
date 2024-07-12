import { Text } from '@fluentui/react';

function BillingBackground(){
    return(
    <div className='billing-background-container'>
        <Text className='billing-title'>Szczegóły rozliczenia</Text>
        <div>
            <Text className='billing-membership-text'>TWOJE CZŁONKOSTWO</Text>
            <div className='billing-membership-container'>
            <Text className='billing-membership-text'>Plan</Text>
            <div>
            <Text className='billing-membership-text'>Premium</Text>
            <Text className='billing-membership-text'>60zł/miesiąc</Text>
            </div>
            <div>
            <Text className='billing-membership-text'>Data następnego rozliczenia</Text>
            <Text className='billing-membership-text'>28 sierpnia 2024</Text>
            </div>
            </div>
        </div>
    </div>
    );
}
export default BillingBackground