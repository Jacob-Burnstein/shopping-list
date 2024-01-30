import axios from "axios";
import { getAuthToken } from "../../contexts/AuthUtils";
import { AuthContextProps } from "../../contexts/AuthContext";

const createAuthenticatedApiClient = (authContext: AuthContextProps) => {
  const token = getAuthToken(authContext);

  const isDevelopment = process.env.NODE_ENV === "development";

  const baseURL = isDevelopment ? "http://localhost:3000/api" : "/api";

  const apiClient = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });

  apiClient.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return apiClient;
};

export default createAuthenticatedApiClient;
