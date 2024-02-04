import axios from "axios";
import { getToken } from "../../utils/tokenStorage";

const isDevelopment = process.env.NODE_ENV === "development";

const baseURL = isDevelopment ? "http://localhost:3000/api" : "/api";

const token = getToken();

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default apiClient;
