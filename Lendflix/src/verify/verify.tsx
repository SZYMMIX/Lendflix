import React from 'react'
import ReactDOM from 'react-dom/client'
import VerifyScript from './VerifyScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('verify-root')!).render(
    <React.StrictMode>
      <VerifyScript />
    </React.StrictMode>,
  )
  