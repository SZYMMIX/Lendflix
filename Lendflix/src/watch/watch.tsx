import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
import WatchScript from './WatchScript';
initializeIcons();

ReactDOM.createRoot(document.getElementById('watch-root')!).render(
    <React.StrictMode>
      <WatchScript />
    </React.StrictMode>,
  )
  