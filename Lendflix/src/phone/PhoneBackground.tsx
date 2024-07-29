import { Icon, Text } from "@fluentui/react";

function PhoneBackground() {
  return (
    <div className="phone-container">
      <div className="payment-back-button-container">
        <a href="account-info.html#/moje-konto">
          <button>
            <Icon iconName="Back" className="back-to-account-icon" />
            <Text className="back-btn-text">Konto </Text>
          </button>
        </a>
      </div>
      <div className="email-change-container">
        <div className="giftcard-texts-container">
          <Text className="phone-page-title">
            Zmień numer telefonu komórkowego
          </Text>
          <Text className="phone-page-title-small">
            Lendflix korzysta z Twojego numeru telefonu do przesyłania ważnych
            informacji o koncie, na przykład aby ułatwić Ci odzyskanie konta lub
            uzyskanie do niego dostępu. Zaraz wyślemy Ci kod, aby potwierdzić
            Twój numer.
          </Text>
        </div>
        <div className="phone-page-inputs">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Numer telefonu"
            required
          />
        </div>
        <div className="phone-buttons-container">
          <a>
            <button id="payment-btn-continue">
              <Text className="payment-buttons-text" id="payment-continue-text">
                Zapisz
              </Text>
            </button>
          </a>
          <a href="account-info.html#/moje-konto">
            <button id="payment-btn-cancel">
              <Text className="payment-buttons-text" id="payment-cancel-text">
                Anuluj
              </Text>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default PhoneBackground;
