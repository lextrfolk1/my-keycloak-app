// authContext.js
import { createContext, useContext } from "react";

export const AuthContext  = createContext({
  profile: null,
  login: () => {},
  logout: () => {},
  loading: false
});

export function useAuth() {
  return useContext(AuthContext);
}
