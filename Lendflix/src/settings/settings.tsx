import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import SettingsScript from './SettingsScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('settings-root')!).render(
    <React.StrictMode>
      <SettingsScript />
    </React.StrictMode>,
  )
  