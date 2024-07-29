import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import LanguagesScript from './LanguagesScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('languages-root')!).render(
    <React.StrictMode>
      <LanguagesScript />
    </React.StrictMode>,
  )
  