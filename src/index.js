import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import LoginLayout from "layouts/Login/Login.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { I18nextProvider } from "react-i18next";
import i18n from "locales/i18n";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store"; // Import your Redux store
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/login/*" element={<LoginLayout />} />
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route
                path="*"
                element={<Navigate to="/login/login" replace />}
                // element={<Navigate to="/admin/dashboard" replace />}
              />
            </Routes>
          </BrowserRouter>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </Provider>
  </I18nextProvider>
);
