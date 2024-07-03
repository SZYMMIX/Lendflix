import React from 'react'
import ReactDOM from 'react-dom/client'
import AccountScript from './AccountScript'
import '../index/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Edit from './Edit';
import Profile from './Profile';
initializeIcons();

ReactDOM.createRoot(document.getElementById('accounts-root')!).render(
    <React.StrictMode>
      <AccountScript />
         
    </React.StrictMode>,
  )
  