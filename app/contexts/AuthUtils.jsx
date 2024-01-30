import { useContext } from "react";
import "./AuthContext";
import { useAuth } from "./AuthContext";

export const getAuthToken = () => {
  const { token } = useAuth;
  return token;
};
