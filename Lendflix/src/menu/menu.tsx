import React from 'react'
import ReactDOM from 'react-dom/client'
import MenuScript from './MenuScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('menu-root')!).render(
    <React.StrictMode>
      <MenuScript />
    </React.StrictMode>,
  )
  