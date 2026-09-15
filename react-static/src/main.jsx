import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import App,{languageFromPath,routeFromPath} from './App.jsx';
import './styles.css';
const root=document.getElementById('root');
const initial=window.__PRERENDER__||{initialPage:routeFromPath(location.pathname),initialLang:languageFromPath(location.pathname)};
const app=<React.StrictMode><App {...initial}/></React.StrictMode>;
if(window.__PRERENDER__)hydrateRoot(root,app);else createRoot(root).render(app);
