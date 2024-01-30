import { useContext } from "react";
import "./AuthContext";
import { useAuth } from "./AuthContext";
import { AuthContextProps } from "./AuthContext";

export const getAuthToken = (authContext: AuthContextProps): string | null => {
  console.log("getAuthToken: ", authContext.token);
  return authContext.token;
};
