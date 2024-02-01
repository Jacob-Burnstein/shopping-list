import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useContext } from "react";
import { getAuthToken } from "../../contexts/AuthUtils";

const isDevelopment = process.env.NODE_ENV === "development";

const baseURL = isDevelopment ? "http://localhost:3000/api" : "/api";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const authContext = useAuth();
//     const token = getAuthToken(authContext);
//     console.log("Token from APICLIENT:", token);

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default apiClient;
