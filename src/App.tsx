import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main/index";
import LoginScreen from "./components/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route
          exact
          path="/"
          element={
            localStorage.getItem("messenger") ? (
              <Main />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
