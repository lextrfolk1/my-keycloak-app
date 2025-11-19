import React, { useContext, useEffect, useRef, useState } from "react";
import keycloak from "./keyclock";
import { AuthContext } from "./authContext";


export function KeycloakAuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // 
  const initCalled = useRef(false);

  useEffect(() => {
    if (!initCalled.current) {
      initCalled.current = true;

      keycloak
        .init({ onLoad: "login-required", checkLoginIframe: false })
        .then(auth => {
          if (auth) {
            keycloak.loadUserProfile().then(setProfile);

            // 🔄 Setup token auto-refresh
            setInterval(() => {
              keycloak
                .updateToken(60) // refresh if < 60s left
                .then(refreshed => {
                  if (refreshed) {
                    console.log("🔑 Token refreshed");
                  }
                })
                .catch(() => {
                  console.warn("❌ Failed to refresh token, logging out");
                  keycloak.logout({ redirectUri: window.location.origin });
                });
            }, 30000); // check every 30s
          }
        })
        .finally(() => setLoading(false))
        .catch(err => console.error("❌ Keycloak init failed:", err));
    }
  }, []);

  const login = () => keycloak.login();
  const logout = () => keycloak.logout({ redirectUri: window.location.origin });

  return (
    <AuthContext.Provider value={{ profile, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
