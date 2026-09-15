import React from 'react';
import {renderToString} from 'react-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import App from './App.jsx';

export function render(props){
  const helmetContext={};
  const html=renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App {...props}/>
      </HelmetProvider>
    </React.StrictMode>
  );
  const {helmet}=helmetContext;
  const head=[helmet?.title,helmet?.priority,helmet?.meta,helmet?.link,helmet?.script]
    .filter(Boolean)
    .map(value=>value.toString())
    .join('');
  return {html,head};
}
