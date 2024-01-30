import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

const createAuthenticatedApiClient = () => {
  const { token } = useAuth();

  const baseURL = "http://localhost:3000/api";

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
