import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='524319842420-0kk4ugtrf9mb5rs16mvs97guldts9iqo.apps.googleusercontent.com' >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);