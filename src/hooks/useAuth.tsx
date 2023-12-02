import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const [authResponse, setAuthResponse] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("productly");
    if (token) {
      const decodedUser = jwtDecode(token);
      setAuthResponse(decodedUser);
    }
  }, []);

  return { authResponse };
};

export default useAuth;
