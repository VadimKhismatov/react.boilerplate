// CSS
import '../scss/base/fonts';
import '../scss/base/main';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './app';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
