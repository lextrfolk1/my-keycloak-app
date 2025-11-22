import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function LocalAuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("localUser");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const login = (username) => {
    const fake = {
      username,
      firstName: username,
      lastName: "Local",
      email: `${username}@local.dev`,
    };
    setProfile(fake);
    localStorage.setItem("localUser", JSON.stringify(fake));
  };

  const logout = () => {
    setProfile(null);
    localStorage.removeItem("localUser");
  };

  return (
    <AuthContext.Provider value={{ profile, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
