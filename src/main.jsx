import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios';

//Deploy
axios.defaults.baseURL = "https://back-mynight-dcker.azurewebsites.net";

//Local
//axios.defaults.baseURL = "http://localhost:3000";

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <Auth0Provider
        domain='dev-gycxcebwgjyhaube.us.auth0.com'
        clientId='st5fCIJimR7rcGToqhLCOWEBumVGhDFQ'
        authorizationParams={{
          redirect_uri: 'https://mynight.club/redirect'
        }}
      >
       <App />
    </Auth0Provider>
  </React.StrictMode>
</BrowserRouter>,
)

