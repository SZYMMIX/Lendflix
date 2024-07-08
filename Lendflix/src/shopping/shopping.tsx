import React from 'react'
import ReactDOM from 'react-dom/client'
import ShoppingScript from './ShoppingScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('shopping-root')!).render(
    <React.StrictMode>
      <ShoppingScript />
    </React.StrictMode>,
  )
  