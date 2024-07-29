import React from 'react'
import ReactDOM from 'react-dom/client'
import InfoScript from './InfoScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('info-root')!).render(
    <React.StrictMode>
      <InfoScript />
    </React.StrictMode>,
  )
  