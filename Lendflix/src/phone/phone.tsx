import React from 'react'
import ReactDOM from 'react-dom/client'
import PhoneScript from './PhoneScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('phone-root')!).render(
    <React.StrictMode>
      <PhoneScript />
    </React.StrictMode>,
  )
  