import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import GlobalStyle from './assets/theme/GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import TermsAndConditions from './pages/TermsAndConditions';
import ForgotPasswordPage from './pages/forgotPasswordFlow/ForgotPasswordPage';
import SetNewPasswordPage from './pages/forgotPasswordFlow/SetNewPasswordPage';
import HomeModule from './layout/HomeModule';

function App(): any {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/forgot-password/:userId/:token"
          element={<SetNewPasswordPage />}
        />

        <Route element={<PrivateRoutes />}>
          <Route path="/home/*" element={<HomeModule />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
