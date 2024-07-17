import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import RestrictionsScript from './RestrictionsScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('restrictions-root')!).render(
    <React.StrictMode>
      <RestrictionsScript />
    </React.StrictMode>,
  )
  