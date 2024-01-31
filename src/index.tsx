import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightMode } from './assets/theme';
import App from './App';
import { store } from './redux/store';

const reduxApp = (
  <Provider store={store}>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </Provider>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={reduxApp} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
