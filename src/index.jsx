import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import Home from "./Components/MainPage/Home";
import SignUp from "./Components/SignUpPage/SignUpPage";
import ForgotPasswordPage from "./Components/LoginPage/ForgotPasswordPage";
import Schedule from "./Components/SchedulePage/Schedule";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="schedule" element={<Schedule />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>NOTHING HERE</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
