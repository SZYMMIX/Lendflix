import React from 'react'
import ReactDOM from 'react-dom/client'
import PaymentScript from './PaymentScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('payment-root')!).render(
    <React.StrictMode>
      <PaymentScript />
    </React.StrictMode>,
  )
  