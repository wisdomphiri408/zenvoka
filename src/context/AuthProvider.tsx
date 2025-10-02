// AuthProvider.tsx
"use client";
import { ReactNode, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/check");
        const data = await res.json();
        setIsLoggedIn(data.loggedIn);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, acceptedTerms, setAcceptedTerms }}>
      {children}
    </AuthContext.Provider>
  );
};
