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
            <Text className='billing-membership-first-text' id='billing1'>Data</Text>
            <Text className='billing-membership-first-text' id='billing2'>Opis</Text>
            <Text className='billing-membership-first-text' id='billing3'>Okres usługi</Text>
            <Text className='billing-membership-first-text' id='billing4'>Metoda płatności</Text>
            <Text className='billing-membership-first-text' id='billing5'>Suma częściowa</Text>
            <Text className='billing-membership-first-text' id='billing6'>Suma</Text>
            </div>
            <div className='billing-line'/>
            <div className='billing-history-texts'>
            <Text className='billing-membership-text-history' id='billing-text1'>12.07.2024</Text>
            <Text className='billing-membership-text-history' id='billing-text2'>Usługa przesyłania strumieniowego</Text>
            <Text className='billing-membership-text-history' id='billing-text3'>12.07.2024 — 11.08.2024</Text>
            <span className='credit-card-billing' id='billing-text4'>
            <img src='./src/assets/creditcard.png' className='payment-card-img' alt="Karta kredytowa: "/>
            <Text className='credit-card-billing-text'>•••• •••• •••• 7453</Text>
            </span>
            <Text className='billing-membership-text-history' id='billing-text5'>48,78 zł (+11,22 zł PTU)</Text>
            <Text className='billing-membership-text-history' id='billing-text6'>60 zł</Text>
            </div>
            <div className='billing-line'/>
            <div className='billing-history-texts'>
            <Text className='billing-membership-text-history' id='billing-text1'>12.06.2024</Text>
            <Text className='billing-membership-text-history' id='billing-text2'>Usługa przesyłania strumieniowego</Text>
            <Text className='billing-membership-text-history' id='billing-text3'>12.06.2024 — 11.07.2024</Text>
            <span className='credit-card-billing' id='billing-text4'>
            <img src='./src/assets/creditcard.png' className='payment-card-img' alt="Karta kredytowa: "/>
            <Text className='credit-card-billing-text'>•••• •••• •••• 7453</Text>
            </span>
            <Text className='billing-membership-text-history' id='billing-text5'>48,78 zł (+11,22 zł PTU)</Text>
            <Text className='billing-membership-text-history' id='billing-text6'>60 zł</Text>
            </div>
            <div className='billing-line'/>
            <Text className='billing-membership-first-text'>UWAGA: Prezentujemy historię rozliczeń maksymalnie z ostatnich 12 miesięcy</Text>
            </div>
        </div>
    </div>
    );
}
export default BillingBackground