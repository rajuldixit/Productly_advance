import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import useAuth from "./hooks/useAuth";
const LazyLogin = lazy(() => import("./Pages/Login"));
const LazyProducts = lazy(() => import("./Pages/Product"));

function App() {
  const { authResponse } = useAuth(),
    navigate = useNavigate();

  useEffect(() => {
    if (!authResponse) {
      navigate("/login");
    } else {
      navigate("/products");
    }
  }, [authResponse]);

  return (
    <Routes>
      <Route
        path="login"
        element={
          <Suspense fallback="loading...login">
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="products"
        element={
          <Suspense fallback="loading...products">
            <LazyProducts />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
