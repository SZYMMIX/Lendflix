import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import PemailScript from './PemailScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('pemail-root')!).render(
    <React.StrictMode>
      <PemailScript />
    </React.StrictMode>,
  )
  