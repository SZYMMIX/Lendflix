import React from 'react'
import ReactDOM from 'react-dom/client'
import ChangeScript from './ChangeScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('change-root')!).render(
    <React.StrictMode>
      <ChangeScript />
    </React.StrictMode>,
  )
  