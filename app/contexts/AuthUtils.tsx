import { useContext } from "react";
import "./AuthContext";
import { useAuth } from "./AuthContext";
import { AuthContextProps } from "./AuthContext";

export const getAuthToken = (authContext: AuthContextProps): string | null => {
  return authContext.token;
};
