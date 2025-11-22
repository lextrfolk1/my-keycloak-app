import React, { useEffect, useState, useRef } from "react";
import keycloak from "./keyclock";
import { AuthContext } from "./AuthContext";

export function KeycloakAuthProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const initCalled = useRef(false);

  useEffect(() => {
    if (!initCalled.current) {
      initCalled.current = true;

      keycloak
        .init({ onLoad: "login-required", checkLoginIframe: false })
        .then((authenticated) => {
          if (authenticated) {
            keycloak.loadUserProfile().then(setProfile);

            setInterval(() => {
              keycloak
                .updateToken(60)
                .then((refreshed) => {
                  if (refreshed) console.log("🔑 Token refreshed");
                })
                .catch(() => {
                  console.warn("Token refresh failed—logging out");
                  keycloak.logout({ redirectUri: window.location.origin });
                });
            }, 30000);
          }
        })
        .catch((err) => console.error("Keycloak init failed", err))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile,
        loading,
        login: () => keycloak.login(),
        logout: () => keycloak.logout({ redirectUri: window.location.origin })
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
