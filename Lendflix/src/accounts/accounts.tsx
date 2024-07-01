import React from 'react'
import ReactDOM from 'react-dom/client'
import AccountScript from './AccountScript'
import '../index/index.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('accounts-root')!).render(
    <React.StrictMode>
      <AccountScript />
    </React.StrictMode>,
  )
  