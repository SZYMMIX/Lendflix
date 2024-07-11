import React from 'react'
import ReactDOM from 'react-dom/client'
import BillingScript from './BillingScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('billing-root')!).render(
    <React.StrictMode>
      <BillingScript />
    </React.StrictMode>,
  )
  