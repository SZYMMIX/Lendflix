import { Text } from '@fluentui/react';

function BillingBackground(){
    return(
    <div className='billing-background-container'>
        <Text className='billing-title'>Szczegóły rozliczenia</Text>
        <div>
            <Text className='billing-membership-first-text'>TWOJE CZŁONKOSTWO</Text>
            <div className='billing-membership-container'>
            <Text className='billing-membership-text billing-title-text'>Plan</Text>
            <div>
            <Text className='billing-membership-text' id='billing-plan'>Premium</Text>
            <Text className='billing-membership-text'>60zł/miesiąc</Text>
            </div>
            <div>
            <Text className='billing-membership-text billing-title-text'>Data następnego rozliczenia</Text>
            <Text className='billing-membership-text'>28 sierpnia 2024</Text>
            </div>
            </div>
            <Text className='billing-membership-under-text'>
            Opłaty członkowskie są pobierane na początku każdego okresu rozliczeniowego. Mogą pojawić się na Twoim koncie kilka dni po dacie rozliczenia. 
            </Text>
            <div className='billing-history-container'>
            <div className='billing-history-titles'>
            <Text className='billing-membership-first-text'>Data</Text>
            <Text className='billing-membership-first-text'>Opis</Text>
            <Text className='billing-membership-first-text'>Okres usługi</Text>
            <Text className='billing-membership-first-text'>Metoda płatności</Text>
            <Text className='billing-membership-first-text'>Suma częściowa</Text>
            <Text className='billing-membership-first-text'>Suma</Text>
            </div>
            <div className='billing-line'/>
            <div>
            <Text className='billing-membership-text'>12.06.2024</Text>
            <Text className='billing-membership-text'>Usługa przesyłania strumieniowego</Text>
            <Text className='billing-membership-text'>12.06.2024—11.07.2024</Text>
            <Text className='billing-membership-text'>Metoda płatności</Text>
            <Text className='billing-membership-text'>48,78 zł (+11,22 zł PTU)</Text>
            <Text className='billing-membership-text'>60 zł</Text>
            </div>
            <div className='billing-line'/>
            <Text className='billing-membership-first-text'>UWAGA: Prezentujemy historię rozliczeń maksymalnie z ostatnich 12 miesięcy</Text>
            </div>
        </div>
    </div>
    );
}
export default BillingBackground