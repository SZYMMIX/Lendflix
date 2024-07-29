import React from 'react'
import ReactDOM from 'react-dom/client'
import EmailScript from './EmailScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('email-root')!).render(
    <React.StrictMode>
      <EmailScript />
    </React.StrictMode>,
  )
  