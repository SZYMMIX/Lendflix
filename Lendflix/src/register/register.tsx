import React from 'react'
import ReactDOM from 'react-dom/client'
import RegisterScript from './RegisterScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('register-root')!).render(
    <React.StrictMode>
      <RegisterScript />
    </React.StrictMode>,
  )
  