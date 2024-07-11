import React from 'react'
import ReactDOM from 'react-dom/client'
import GiftcardScript from './GiftcardScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('giftcard-root')!).render(
    <React.StrictMode>
      <GiftcardScript />
    </React.StrictMode>,
  )
  