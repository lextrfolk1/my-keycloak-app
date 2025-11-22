// authProvider.js
import React from "react";
import { LocalAuthProvider } from "./LocalAuthProvider";
import { KeycloakAuthProvider } from "./keyCloakProvider";

// Read from env or fallback
const enableSSO = process.env.REACT_APP_ENABLE_SSO === "true";
console.log("Environment Variable REACT_APP_ENABLE_SSO:", process.env.REACT_APP_ENABLE_SSO);
console.log("SSO Enabled:", enableSSO);


export function AuthProvider({ children }) {
  return enableSSO ? (<KeycloakAuthProvider>{children}</KeycloakAuthProvider>) : ( <LocalAuthProvider>{children}</LocalAuthProvider> ) ;
  }
export const useAuth = () => React.useContext(require("./AuthContext").AuthContext);