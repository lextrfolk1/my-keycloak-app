import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";

export function LocalAuthProvider({ children }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("localUser");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const login = (username) => {
    const fakeProfile = {
      username,
      firstName: username,
      lastName: "(Local)",
      email: `${username}@local.dev`,
    };
    setProfile(fakeProfile);
    localStorage.setItem("localUser", JSON.stringify(fakeProfile));
  };

  const logout = () => {
    setProfile(null);
    localStorage.removeItem("localUser");
  };

  return (
    <AuthContext.Provider value={{ profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
