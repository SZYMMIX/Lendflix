import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieScript from './MovieScript';
import '../index/index.css'
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.createRoot(document.getElementById('movie-root')!).render(
    <React.StrictMode>
      <MovieScript />
    </React.StrictMode>,
  )
  